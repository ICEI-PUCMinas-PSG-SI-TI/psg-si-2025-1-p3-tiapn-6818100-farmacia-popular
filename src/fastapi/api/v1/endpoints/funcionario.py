from typing import List, Optional, Any

from fastapi import APIRouter, status, Depends, HTTPException, Response
from fastapi.security import OAuth2PasswordRequestForm
from fastapi.responses import JSONResponse

from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from sqlalchemy.exc import IntegrityError

from models.funcionario_model import (
    FuncionarioModel,
    CargoEnum
)

from schemas.funcionario_schema import (
    FuncionarioBaseSchema,
    FuncionarioCreateSchema,
    FuncionarioUpdateSchema,
)

from core.deps import get_session, get_current_user
from core.security import gerar_hash_senha
from core.auth import autenticar, criar_token_acesso, revogar_token, REVOKED_USER_IDS


router = APIRouter()


# GET Usuário Logado
@router.get("/logado", response_model=FuncionarioBaseSchema)
async def get_usuario_logado(funcionario_logado: FuncionarioModel = Depends(get_current_user)):
    return funcionario_logado


# POST / Criar Usuário
@router.post(
    "/", status_code=status.HTTP_201_CREATED, response_model=FuncionarioBaseSchema
)
async def post_funcionario(
    funcionario: FuncionarioCreateSchema, db: AsyncSession = Depends(get_session),
    funcionario_logado: FuncionarioModel = Depends(get_current_user)
):
    print(f'{funcionario_logado=}')
    # Para criar usuários é necessário ser Gerente.
    if funcionario_logado.cargo != CargoEnum.GERENTE:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail=f"Para criar usuários é necessário ser Gerente.",
        )
    
    async with db as session:
        funcionario_novo: FuncionarioModel = FuncionarioModel(
            nome=funcionario.nome,
            cargo=funcionario.cargo,
            senha=gerar_hash_senha(funcionario.senha),
            ativo=funcionario.ativo,
        )

        try:
            session.add(funcionario_novo)
            await session.commit()

            return funcionario_novo
        except IntegrityError:
            raise HTTPException(
                status_code=status.HTTP_409_CONFLICT,
                detail=f"Já existe um Funcionário com os dados informados.",
            )


# POST / Login
@router.post("/login")
async def login(
    form_data: OAuth2PasswordRequestForm = Depends(),
    db: AsyncSession = Depends(get_session),
):
    funcionario: FuncionarioModel = await autenticar(
        nome=form_data.username,
        senha=form_data.password,
        db=db,
    )

    if not funcionario:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Dados de aceso incorretos.",
        )
    
    return JSONResponse(
        content={
            "access_token": criar_token_acesso(sub=funcionario.id),
            "token_type": " bearer",
        },
        status_code=status.HTTP_200_OK,
    )


# POST / Logout
@router.post("/logout")
async def logout(mensagem: str = Depends(revogar_token)):
    return JSONResponse(
        content={
            "detail": mensagem,
            "token_type": " bearer",
        },
        status_code=status.HTTP_200_OK,
    )


# GET Usuário Logado
@router.get("/logado", response_model=FuncionarioBaseSchema)
async def get_usuario_logado(funcionario_logado: FuncionarioModel = Depends(get_current_user)):
    return funcionario_logado


@router.get("/", response_model=List[FuncionarioBaseSchema])
async def get_funcionarios(
    db: AsyncSession = Depends(get_session),
    funcionario_logado: FuncionarioModel = Depends(get_current_user),
):
    # Para listar os dados de todos os usuários, precisa ser Admin
    if funcionario_logado.cargo != CargoEnum.GERENTE:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail=f"Para listar os dados de todos os funcionarios, é necessário ser Gerente.",
        )

    async with db as session:
        query = select(FuncionarioModel).order_by(FuncionarioModel.id)
        result = await session.execute(query)
        funcionarios: List[FuncionarioBaseSchema] = result.scalars().unique().all()

        return funcionarios


@router.get("/{funcionario_id}", response_model=FuncionarioBaseSchema)
async def get_usuario(
    funcionario_id: int,
    db: AsyncSession = Depends(get_session),
    funcionario_logado: FuncionarioModel = Depends(get_current_user),
):
    async with db as session:
        query = select(FuncionarioModel).where(FuncionarioModel.id == funcionario_id)
        result = await session.execute(query)
        funcionario: FuncionarioBaseSchema = result.scalars().unique().one_or_none()

        if not funcionario:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"Funcionário com ID {funcionario_id} não encontrado.",
            )

        # Somente o próprio funcionário ou um Gerente pode listar os dados da usuário
        if funcionario.id != funcionario_logado.id and funcionario_logado.cargo != CargoEnum.GERENTE:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail=f"Somente o próprio funcionário ou um Gerente pode listar os dados do usuário ID={funcionario_id}.",
            )

        return funcionario


@router.put(
    "/{funcionario_id}",
    response_model=FuncionarioBaseSchema,  # Retorna modelo SEM a senha
    status_code=status.HTTP_202_ACCEPTED,
)
async def put_funcionario(
    funcionario_id: int,
    funcionario: FuncionarioUpdateSchema,
    db: AsyncSession = Depends(get_session),
    funcionario_logado: FuncionarioModel = Depends(get_current_user),
):
    print(f'Entrando em /funcionarios/{funcionario_id}')
    async with db as session:
        query = select(FuncionarioModel).where(FuncionarioModel.id == funcionario_id)
        result = await session.execute(query)
        funcionario_up: FuncionarioModel = result.scalars().unique().one_or_none()

        if not funcionario_up:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"Funcionário com ID {funcionario_id} não encontrado.",
            )

        # Somente o próprio usuário ou um Gerente pode editar a usuário
        if funcionario_up.id != funcionario_logado.id and funcionario_logado.cargo != CargoEnum.GERENTE:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail=f"Somente o próprio funcionário ou um Gerente pode editar o usuário ID={funcionario_id}.",
            )

        if funcionario.nome:
            funcionario_up.nome = funcionario.nome
        if funcionario.cargo:
            funcionario_up.cargo = funcionario.cargo
        if funcionario.ativo:
            funcionario_up.ativo = funcionario.ativo
        if funcionario.senha:
            funcionario_up.senha = gerar_hash_senha(funcionario.senha)

        try:
            await session.commit()

            return funcionario_up
        except IntegrityError:
            raise HTTPException(
                status_code=status.HTTP_409_CONFLICT,
                detail=f"Erro ao atualizar o Funcionário.",
            )


@router.delete("/{funcionario_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_usuario(
    funcionario_id: int,
    db: AsyncSession = Depends(get_session),
    funcionario_logado: FuncionarioModel = Depends(get_current_user),
):
    async with db as session:
        query = select(FuncionarioModel).where(FuncionarioModel.id == funcionario_id)
        result = await session.execute(query)
        funcionario_del: FuncionarioModel = result.scalars().unique().one_or_none()

        if not funcionario_del:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"Funcionário com ID {funcionario_id} não encontrado.",
            )

        # Somente um Gerente pode excluir o usuário.
        if funcionario_logado.cargo != CargoEnum.GERENTE:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail=f"Somente o próprio funcionário ou um Gerente pode excluir o usuário ID={funcionario_id}.",
            )

        await session.delete(funcionario_del)
        await session.commit()
        # REVOKED_USER_IDS.add(funcionario_id)

        return Response(status_code=status.HTTP_204_NO_CONTENT)

