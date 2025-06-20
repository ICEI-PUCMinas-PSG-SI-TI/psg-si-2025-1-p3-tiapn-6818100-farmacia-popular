from datetime import date

from sqlalchemy import Date
from sqlalchemy import String
from sqlalchemy import DECIMAL

from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column

from core.configs import settings


class ProdutoModel(settings.DBBaseModel):
    __tablename__: str = "produto"

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)

    descricao: Mapped[str] = mapped_column(String(80), nullable=False)

    preco: Mapped[float] = mapped_column(DECIMAL(8,2), nullable=False)

    quantidade: Mapped[int] = mapped_column(nullable=False)

    validade: Mapped[date] = mapped_column(
        Date(),
        default=date.today,
        server_default=settings.DB_CURRENT_DATE,
    )

    lote: Mapped[str] = mapped_column(String(45), nullable=False)

    laboratorio: Mapped[str] = mapped_column(String(45), nullable=False)

    def __repr__(self) -> str:
        return f"<Produto: {self.id:>3}>"

