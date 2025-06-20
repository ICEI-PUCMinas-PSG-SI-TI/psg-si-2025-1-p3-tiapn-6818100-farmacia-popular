import enum
from sqlalchemy import String

from sqlalchemy import Enum
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column

from core.configs import settings


class CargoEnum(enum.Enum):
    GERENTE: str = "GERENTE"
    EMPREGADO: str = "EMPREGADO"


class StatusEnum(enum.Enum):
    SIM: str = "SIM"
    NAO: str = "NAO"


class FuncionarioModel(settings.DBBaseModel):
    __tablename__: str = "funcionario"

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)

    nome: Mapped[str] = mapped_column(String(80), nullable=True)

    cargo: Mapped[enum.Enum] = mapped_column(Enum(CargoEnum), nullable=True)

    senha: Mapped[str] = mapped_column(String(60), nullable=True)

    ativo: Mapped[enum.Enum] = mapped_column(Enum(StatusEnum), nullable=True)

    def __repr__(self) -> str:
        return f"<Funcionario: {self.id:>3}>"
