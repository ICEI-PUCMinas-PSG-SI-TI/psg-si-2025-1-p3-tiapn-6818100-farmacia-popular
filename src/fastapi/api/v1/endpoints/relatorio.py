from typing import List

from datetime import date, timedelta

from fastapi import APIRouter, status, HTTPException, Depends


from sqlalchemy import func, extract, Date, cast, text, String  # Importar 'text' se precisar de expressões específicas do DB
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select

from models.funcionario_model import FuncionarioModel, CargoEnum
from models.pedido_model import PedidoModel
from models.item_pedido_model import ItemPedidoModel

from schemas.relatorio_schema import (
    FiltroVendasSchema,
    VendasMesSchema,
    FiltroFuncionarioSchema,
    VendasFuncionarioSchema
)

from core.deps import get_session, get_current_user

router = APIRouter()

# --- Endpoint para o Relatório de Vendas por Mês ---
@router.post("/vendas_por_mes",
            response_model=List[VendasMesSchema]
)
async def get_relatorio_vendas_por_mes(
    filtro: FiltroVendasSchema,
    db: AsyncSession = Depends(get_session),
    funcionario_logado: FuncionarioModel = Depends(get_current_user) # Protege o endpoint
):
    """
    Gera um relatório do valor total dos pedidos agrupados por mês
    em um intervalo de duas datas.

    Requer que o funcionário logado seja um GERENTE.
    """
    # 1. Verificação de Permissão (ex: Somente Gerentes podem gerar relatórios)
    if funcionario_logado.cargo != CargoEnum.GERENTE:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Apenas Gerentes podem acessar este relatório."
        )

    # 2. Construir a Query SQLAlchemy
    async with db as session:
        total_por_item = ItemPedidoModel.quantidade * ItemPedidoModel.preco

        subquery_pedido_total = (
            select(
                ItemPedidoModel.id_pedido_venda,
                func.sum(total_por_item).
                label('total_pedido')
            )
            .group_by(ItemPedidoModel.id_pedido_venda)
            .subquery()
        )

        # Expressão para formatar o mês_ano como string (para o SELECT final e GROUP BY)
        mes_ano_formatado = func.date_format(PedidoModel.data, '%Y-%m')
        
        # Expressões numéricas de ano e mês (para o SELECT final e ORDER BY)
        ano_numerico = extract('year', PedidoModel.data)
        mes_numerico = extract('month', PedidoModel.data)

        query = select(
            mes_ano_formatado.label('mes_ano'), # Esta é a coluna de saída "mes_ano"
            func.sum(subquery_pedido_total.c.total_pedido).label('valor_total'),
            # Adicionamos as colunas numéricas ao SELECT, mas não as retornamos diretamente no schema
            # Elas servem para satisfazer o ONLY_FULL_GROUP_BY no ORDER BY
            ano_numerico.label('ano_ordem'),
            mes_numerico.label('mes_ordem')
        ).join(
            subquery_pedido_total, PedidoModel.id == subquery_pedido_total.c.id_pedido_venda
        ).where(
            PedidoModel.data.between(filtro.data_inicio, filtro.data_fim + timedelta(days=1))
        ).group_by(
            mes_ano_formatado, # AGORA, o GROUP BY usa a mesma expressão de string do SELECT
            ano_numerico,
            mes_numerico
        ).order_by(
            # E o ORDER BY usa as expressões numéricas que também estão no SELECT (anonimamente)
            ano_numerico, # Referência ao alias da coluna no SELECT
            mes_numerico  # Referência ao alias da coluna no SELECT
        )

        # Exemplo para debug: Imprimir a query SQL gerada
        # print(query.compile(dialect=session.bind.dialect, compile_kwargs={"literal_binds": True}))

        result = await session.execute(query)
        
        # Mapeia os resultados para o Pydantic Schema
        relatorio = [
            VendasMesSchema(mes_ano=row.mes_ano, valor_total=row.valor_total)
            for row in result.all()
        ]
        return relatorio


# --- Endpoint para o Relatório de Vendas por Funcionario no mês ---
@router.post(
    "/vendas_por_funcionario",
    response_model=List[VendasFuncionarioSchema]
)
async def get_relatorio_vendas_por_funcionario(
    filtro: FiltroFuncionarioSchema,
    db: AsyncSession = Depends(get_session),
    funcionario_logado: FuncionarioModel = Depends(get_current_user)
):
    # 1) Verificação de permissão (se aplicável)
    if funcionario_logado.cargo != CargoEnum.GERENTE:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Apenas Gerentes podem acessar este relatório."
        )

    # Verificação da ano
    if not (2000 <= filtro.ano <= 2100):
        raise HTTPException(
            status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
            detail="Ano para relatório inválido."
        )
    
    # Verificação da combinação ano/mês
    try:
        # dia=1 é suficiente para checar mês e ano
        data_teste = date(filtro.ano, filtro.mes, 1)
    except ValueError:
        raise HTTPException(
            status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
            detail="Combinação ano/mês inválida."
        )

    async with db as session:
        # 2) Subquery que soma cada pedido
        subq_total_por_pedido = (
            select(
                ItemPedidoModel.id_pedido_venda.label("id_pedido"),
                func.sum(ItemPedidoModel.quantidade * ItemPedidoModel.preco)
                    .label("total_pedido")
            )
            .group_by(ItemPedidoModel.id_pedido_venda)
            .subquery()
        )

        # 3) Query principal: agrupa por funcionário
        query = (
            select(
                FuncionarioModel.id.label("funcionario_id"),
                FuncionarioModel.nome.label("funcionario_nome"),
                func.sum(subq_total_por_pedido.c.total_pedido)
                    .label("valor_total")
            )
            # junta pedido → total_por_pedido
            .join(
                PedidoModel,
                PedidoModel.id == subq_total_por_pedido.c.id_pedido
            )
            # junta pedido → funcionário
            .join(
                FuncionarioModel,
                FuncionarioModel.id == PedidoModel.id_funcionario
            )
            # filtra só o mês/ano desejado
            .where(
                extract("year", PedidoModel.data) == filtro.ano,
                extract("month", PedidoModel.data) == filtro.mes
            )
            # agrupa por funcionário
            .group_by(
                FuncionarioModel.id,
                FuncionarioModel.nome
            )
            # opcional: ordena por nome ou por valor_total
            .order_by(FuncionarioModel.nome)
        )

        result = await session.execute(query)
        rows = result.all()

        # 4) Mapeia para o schema Pydantic
        relatorio = [
            VendasFuncionarioSchema(
                id=row.funcionario_id,
                nome=row.funcionario_nome,
                valor_total=row.valor_total
            )
            for row in rows
        ]
        return relatorio
