from typing import List

from fastapi import APIRouter
from fastapi import status
from fastapi import Depends
from fastapi import HTTPException
from fastapi import Response

from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select

from models.funcionario_model import FuncionarioModel

from models.produto_model import ProdutoModel
from schemas.produto_schema import ProdutoSchema

from core.deps import get_session, get_current_user

router = APIRouter()


@router.post("/", status_code=status.HTTP_201_CREATED, response_model=ProdutoSchema)
async def post_produto(
    produto: ProdutoSchema,
    db: AsyncSession = Depends(get_session),
    funcionario_logado: FuncionarioModel = Depends(get_current_user)
):
    async with db as session:
        produto_novo = ProdutoModel(
            descricao=produto.descricao,
            preco=produto.preco,
            quantidade=produto.quantidade,
            validade=produto.validade,
            lote=produto.lote,
            laboratorio=produto.laboratorio,
        )

        session.add(produto_novo)
        await session.commit()
        return produto_novo


@router.get("/", response_model=List[ProdutoSchema])
async def get_produtos(
    db: AsyncSession = Depends(get_session),
    funcionario_logado: FuncionarioModel = Depends(get_current_user)
):
    async with db as session:
        query = select(ProdutoModel)
        result = await session.execute(query)
        produtos: List[ProdutoModel] = result.scalars().all()

        return produtos


@router.get("/{produto_id}", response_model=ProdutoSchema)
async def get_produto(
    produto_id: int,
    db: AsyncSession = Depends(get_session),
    funcionario_logado: FuncionarioModel = Depends(get_current_user)
):
    async with db as session:
        query = select(ProdutoModel).where(ProdutoModel.id == produto_id)
        result = await session.execute(query)
        produto: ProdutoModel = result.scalar_one_or_none()

        if not produto:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"Produto com ID {produto_id} não encontrado.",
            )

        return produto


@router.put(
    "/{produto_id}", response_model=ProdutoSchema, status_code=status.HTTP_202_ACCEPTED
)
async def put_produto(
    produto_id: int,
    produto: ProdutoSchema,
    db: AsyncSession = Depends(get_session),
    funcionario_logado: FuncionarioModel = Depends(get_current_user)
):
    async with db as session:
        query = select(ProdutoModel).where(ProdutoModel.id == produto_id)
        result = await session.execute(query)
        produto_up: ProdutoModel = result.scalar_one_or_none()

        if not produto_up:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"Produto com ID {produto_id} não encontrado.",
            )

        if produto.descricao:
            produto_up.descricao = produto.descricao
        if produto.preco:
            produto_up.preco = produto.preco
        if produto.validade:
            produto_up.validade = produto.validade
        if produto.quantidade:
            produto_up.quantidade = produto.quantidade
        if produto.lote:
            produto_up.lote = produto.lote
        if produto.laboratorio:
            produto_up.laboratorio = produto.laboratorio
        await session.commit()
        return produto_up


@router.delete("/{produto_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_produto(
    produto_id: int,
    db: AsyncSession = Depends(get_session),
    funcionario_logado: FuncionarioModel = Depends(get_current_user)
):
    async with db as session:
        query = select(ProdutoModel).where(ProdutoModel.id == produto_id)
        result = await session.execute(query)
        produto_del: ProdutoModel = result.scalar_one_or_none()

        if not produto_del:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"Produto com ID {produto_id} não encontrado.",
            )

        await session.delete(produto_del)
        await session.commit()
        return Response(status_code=status.HTTP_204_NO_CONTENT)
