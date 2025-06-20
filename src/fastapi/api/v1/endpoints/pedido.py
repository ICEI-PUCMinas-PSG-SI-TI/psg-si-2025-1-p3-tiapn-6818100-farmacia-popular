from typing import List

from fastapi import APIRouter
from fastapi import status
from fastapi import Depends
from fastapi import HTTPException
from fastapi import Response

from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select

from models.funcionario_model import FuncionarioModel
from models.pedido_model import PedidoModel
from models.pedido_model import ItemPedidoModel
from models.produto_model import ProdutoModel

from schemas.pedido_schema import (
    PedidoBaseSchema,
    PedidoCreateSchema,
)

from core.deps import get_session, get_current_user

router = APIRouter()


@router.post("/", status_code=status.HTTP_201_CREATED, response_model=PedidoBaseSchema)
async def post_pedido(
    pedido: PedidoCreateSchema,
    db: AsyncSession = Depends(get_session),
    funcionario_logado: FuncionarioModel = Depends(get_current_user)
):
    async with db as session:
        # Verificar se o funcionário existe no banco de dados
        query = select(FuncionarioModel).where(FuncionarioModel.id == pedido.id_funcionario)
        result = await session.execute(query)
        funcionario: FuncionarioModel = result.scalars().unique().one_or_none()

        if not funcionario:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"Pedido inválido! Funcionário com ID={pedido.id_funcionario} não existe. verifique o parâmetro id_funcionário.",
            )

        # Cria o pedido
        pedido_novo = PedidoModel(
            id_funcionario=pedido.id_funcionario
        )
        
        numero: int = 1
        for item in pedido.items:
            # Pesquisa o produtos para incluir o preço
            query = select(ProdutoModel).where(ProdutoModel.id == item.id_produto)
            result = await session.execute(query)
            produto: ProdutoModel = result.scalar_one_or_none()

            if not produto:
                raise HTTPException(
                    status_code=status.HTTP_404_NOT_FOUND,
                    detail=f"Produto com ID {item.id_produto} não encontrado.",
                )

            item_novo = ItemPedidoModel(
                id_produto=item.id_produto,
                numero_item=numero,
                quantidade=item.quantidade,
                preco=produto.preco,
            )
            pedido_novo.items.append(item_novo)
            numero += 1

        session.add(pedido_novo)

        try:
            await session.commit()
            await session.refresh(pedido_novo)  # Atualiza o objeto com os dados dos IDs criados no banco
            return pedido_novo
        except Exception as e:
            await session.rollback()
            raise HTTPException(
                status_code=status.HTTP_409_CONFLICT,
                detail=f"Erro ao criar o pedido e seus itens: {e}",
            )


@router.get("/", response_model=List[PedidoBaseSchema])
async def get_pedidos(
    db: AsyncSession = Depends(get_session),
    funcionario_logado: FuncionarioModel = Depends(get_current_user)
):
    async with db as session:
        query = select(PedidoModel)
        result = await session.execute(query)
        pedidos: List[PedidoModel] = result.unique().scalars().all()

        return pedidos


@router.get("/{pedido_id}", response_model=PedidoBaseSchema)
async def get_pedido(
    pedido_id: int,
    db: AsyncSession = Depends(get_session),
    funcionario_logado: FuncionarioModel = Depends(get_current_user)
):
    async with db as session:
        query = select(PedidoModel).where(PedidoModel.id == pedido_id)
        result = await session.execute(query)
        pedido: PedidoModel = result.unique().scalar_one_or_none()

        if not pedido:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"Pedido com ID {pedido_id} não encontrado.",
            )

        return pedido


# @router.put(
#     "/{pedido_id}", response_model=PedidoBaseSchema, status_code=status.HTTP_202_ACCEPTED
# )
# async def put_pedido(
#     pedido_id: int,
#     pedido: PedidoUpdateSchema, db: AsyncSession = Depends(get_session),
#     funcionario_logado: FuncionarioModel = Depends(get_current_user)
# ):
#     async with db as session:
#         query = select(PedidoModel).where(PedidoModel.id == pedido_id)
#         result = await session.execute(query)
#         pedido_up: PedidoModel = result.scalar_one_or_none()

#         if not pedido_up:
#             raise HTTPException(
#                 status_code=status.HTTP_404_NOT_FOUND,
#                 detail=f"Pedido com ID {pedido_id} não encontrado.",
#             )

#         pedido_up.id_funcionario = pedido.id_funcionario
#         pedido_up.items = pedido.items
#         await session.commit()
#         return pedido_up


# @router.delete("/{pedido_id}", status_code=status.HTTP_204_NO_CONTENT)
# async def delete_pedido(
#     pedido_id: int,
#     db: AsyncSession = Depends(get_session),
#     funcionario_logado: FuncionarioModel = Depends(get_current_user)
# ):
#     async with db as session:
#         query = select(PedidoModel).where(PedidoModel.id == pedido_id)
#         result = await session.execute(query)
#         pedido_del: PedidoModel = result.scalar_one_or_none()

#         if not pedido_del:
#             raise HTTPException(
#                 status_code=status.HTTP_404_NOT_FOUND,
#                 detail=f"Pedido com ID {pedido_id} não encontrado.",
#             )

#         await session.delete(pedido_del)
#         await session.commit()
#         return Response(status_code=status.HTTP_204_NO_CONTENT)
