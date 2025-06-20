from typing import Optional
from datetime import date


from pydantic import BaseModel as SCBaseModel
from pydantic import ConfigDict


class ProdutoSchema(SCBaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: Optional[int] = None
    descricao: str
    preco: float
    quantidade: int
    validade: date
    lote: str
    laboratorio: str


class ProdutoUpdateSchema(SCBaseModel):
    model_config = ConfigDict(from_attributes=True)

    descricao: Optional[str] = None
    preco: Optional[float] = None
    quantidade: Optional[int] = None
    validade: Optional[date] = None
    lote: Optional[str] = None
    laboratorio: Optional[str] = None