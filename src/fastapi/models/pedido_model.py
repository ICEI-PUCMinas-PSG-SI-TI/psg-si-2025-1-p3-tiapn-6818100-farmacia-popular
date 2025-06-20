from datetime import datetime

from typing import List
from typing import Optional

from sqlalchemy import DateTime
from sqlalchemy import ForeignKey

from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column
from sqlalchemy.orm import relationship

from core.configs import settings

from models.item_pedido_model import ItemPedidoModel

class PedidoModel(settings.DBBaseModel):
        __tablename__: str = "pedido_venda"

        id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)

        data: Mapped[datetime] = mapped_column(
            DateTime(timezone=False),
            default=datetime.now,
            server_default=settings.DB_TIMESTAMP,
            nullable=False
        )

        id_funcionario: Mapped[int] = mapped_column(ForeignKey('funcionario.id'), nullable=False)

        items: Mapped[Optional[List[ItemPedidoModel]]] = relationship(
            primaryjoin="PedidoModel.id == ItemPedidoModel.id_pedido_venda",
            lazy='joined'
        )

        def __repr__(self) -> str:
            return f"<Pedido Venda: {self.id:>3}>"