from typing import Optional

from pydantic import BaseModel as SCBaseModel
from pydantic import ConfigDict


class ItemVendaBaseSchema(SCBaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: Optional[int] = None
    id_pedido_venda: int
    id_produto: int
    numero_item: int
    quantidade: int
    preco: float
    descricao: str


class ItemVendaCreateSchema(SCBaseModel):
    model_config = ConfigDict(from_attributes=True)

    id_produto: int
    quantidade: int