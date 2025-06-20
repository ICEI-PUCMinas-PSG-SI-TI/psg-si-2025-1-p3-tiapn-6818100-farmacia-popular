from fastapi import APIRouter

from api.v1.endpoints import funcionario
from api.v1.endpoints import pedido
from api.v1.endpoints import produto
from api.v1.endpoints import relatorio

api_router = APIRouter()

api_router.include_router(funcionario.router, prefix="/funcionarios", tags=["funcionario"])
api_router.include_router(pedido.router, prefix="/pedidos", tags=["pedido"])
api_router.include_router(produto.router, prefix="/produtos", tags=["produto"])
api_router.include_router(relatorio.router, prefix="/relatorios", tags=["relatorios"])
