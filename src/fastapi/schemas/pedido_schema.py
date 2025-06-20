from datetime import datetime

from typing import Optional
from typing import List

from pydantic import BaseModel as SCBaseModel
from pydantic import ConfigDict

from schemas.item_pedido_schema import ItemVendaBaseSchema, ItemVendaCreateSchema


class PedidoBaseSchema(SCBaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: Optional[int] = None
    data: Optional[datetime] = None
    id_funcionario: int
    items: List[ItemVendaBaseSchema]


class PedidoCreateSchema(SCBaseModel):
    model_config = ConfigDict(from_attributes=True)

    data: Optional[datetime] = None
    id_funcionario: int
    items: List[ItemVendaCreateSchema]


class PedidoUpdateSchema(PedidoBaseSchema):
    model_config = ConfigDict(from_attributes=True)

    id_funcionario: Optional[int] = None
    items: List[ItemVendaCreateSchema]
