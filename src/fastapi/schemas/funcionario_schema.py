from typing import Optional

from pydantic import BaseModel as SCBaseModel
from pydantic import ConfigDict

from models.funcionario_model import CargoEnum
from models.funcionario_model import StatusEnum


class FuncionarioBaseSchema(SCBaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: Optional[int] = None
    nome: str
    cargo: CargoEnum
    ativo: StatusEnum


class FuncionarioCreateSchema(FuncionarioBaseSchema):
    senha: str


class FuncionarioUpdateSchema(SCBaseModel):
    nome: Optional[str] = None
    cargo: Optional[CargoEnum] = None
    ativo: Optional[StatusEnum] = None
    senha: Optional[str] = None
