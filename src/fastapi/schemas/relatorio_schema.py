from typing import Optional
from datetime import date

from pydantic import BaseModel as SCBaseModel
from pydantic import ConfigDict


class FiltroVendasSchema(SCBaseModel):
    model_config = ConfigDict(from_attributes=True)

    data_inicio: date
    data_fim: date


class VendasMesSchema(SCBaseModel):
    model_config = ConfigDict(from_attributes=True)

    mes_ano: str  # Ex: "2024-05"
    valor_total: float


class FiltroFuncionarioSchema(SCBaseModel):
    model_config = ConfigDict(from_attributes=True)

    ano: int
    mes: int


class VendasFuncionarioSchema(SCBaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    nome: str
    valor_total: float