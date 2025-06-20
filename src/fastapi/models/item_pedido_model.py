from sqlalchemy import DECIMAL
from sqlalchemy import ForeignKey
from sqlalchemy import select

from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column
from sqlalchemy.orm import column_property

from core.configs import settings

from models.produto_model import ProdutoModel


class ItemPedidoModel(settings.DBBaseModel):
    __tablename__: str = "item_venda"

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)

    id_pedido_venda: Mapped[int] = mapped_column(ForeignKey('pedido_venda.id'), nullable=False)

    id_produto: Mapped[int] = mapped_column(ForeignKey('produto.id'), nullable=False)

    numero_item: Mapped[int] = mapped_column(nullable=False)

    quantidade: Mapped[int] = mapped_column(nullable=False)

    preco: Mapped[float] = mapped_column(DECIMAL(8,2), nullable=False)

    descricao: Mapped[str] = column_property(
        select(ProdutoModel.descricao)
        .where(ProdutoModel.id == id_produto)
        .scalar_subquery()
    )

    def __repr__(self) -> str:
        return f"<Item Venda: {self.id:>3}>"