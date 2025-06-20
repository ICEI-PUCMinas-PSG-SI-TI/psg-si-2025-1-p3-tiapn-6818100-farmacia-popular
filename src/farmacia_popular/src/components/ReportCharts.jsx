import * as React from 'react'
import { useState } from 'react'
import { BarChart } from '@mui/x-charts/BarChart'
import { useLocation } from 'react-router-dom'
import api from '../services/api'

export default function ReportCharts() {
  const location = useLocation()
  const currentPath = location.pathname

  const [reportName, setReportName] = useState('')
  const [data, setData] = useState([])
  const [labels, setLabels] = useState([])
  const [loading, setLoading] = useState(false)

  const [startDate, setStartDate] = useState('2025-01-01')
  const [endDate, setEndDate] = useState('2025-06-20')
  const [ano, setAno] = useState('2025')
  const [mes, setMes] = useState('4')

  const buscarRelatorio = async () => {
    setLoading(true)
    setData([])
    setLabels([])

    try {
      if (currentPath === '/relatorio-financeiro') {
        setReportName('Relatório de Vendas')

        const response = await api.post('/relatorios/vendas_por_mes', {
          data_inicio: startDate,
          data_fim: endDate,
        })

        const result = response.data

        const filtered = result.filter(
          item => item.valor_total != null && item.mes_ano != null
        )

        const valores = filtered.map(item => Number(item.valor_total))
        const meses = filtered.map(item => item.mes_ano)

        setData(valores)
        setLabels(meses)

      } else if (currentPath === '/relatorio-estoque') {
        setReportName('Relatório de Funcionários')

        const response = await api.post('/relatorios/vendas_por_funcionario', {
          ano,
          mes,
        })

        const result = response.data

        const filtered = result.filter(
          item => item.valor_total != null && item.nome != null
        )

        const nomes = filtered.map(item => item.nome)
        const valores = filtered.map(item => Number(item.valor_total))

        setLabels(nomes)
        setData(valores)
      }
    } catch (error) {
      console.error('Erro ao buscar dados:', error.response?.data || error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="h-screen flex flex-col justify-start overflow-hidden pt-25">
      <div className="p-6 bg-white/60 from-white to-blue-200 shadow-md max-w-2xl w-150 mx-auto rounded-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">{reportName || 'Selecione um período'}</h1>

        <div className="flex flex-wrap justify-end gap-4 mb-6">
          {currentPath === '/relatorio-financeiro' && (
            <>
              <div className="flex flex-col items-start">
                <label htmlFor="startDate" className="text-sm text-gray-700 mb-1">Início</label>
                <input
                  type="date"
                  id="startDate"
                  value={startDate}
                  onChange={e => setStartDate(e.target.value)}
                  className="p-1 text-sm border border-gray-300 rounded-md w-32"
                />
              </div>

              <div className="flex flex-col items-start">
                <label htmlFor="endDate" className="text-sm text-gray-700 mb-1">Fim</label>
                <input
                  type="date"
                  id="endDate"
                  value={endDate}
                  onChange={e => setEndDate(e.target.value)}
                  className="p-1 text-sm border border-gray-300 rounded-md w-32"
                />
              </div>
            </>
          )}

          {currentPath === '/relatorio-estoque' && (
            <>
              <div className="flex flex-col items-start">
                <label htmlFor="ano" className="text-sm text-gray-700 mb-1">Ano</label>
                <input
                  type="text"
                  id="ano"
                  value={ano}
                  onChange={e => setAno(e.target.value)}
                  className="p-1 text-sm border border-gray-300 rounded-md w-24"
                />
              </div>

              <div className="flex flex-col items-start">
                <label htmlFor="mes" className="text-sm text-gray-700 mb-1">Mês</label>
                <input
                  type="text"
                  id="mes"
                  value={mes}
                  onChange={e => setMes(e.target.value)}
                  className="p-1 text-sm border border-gray-300 rounded-md w-20"
                />
              </div>
            </>
          )}

          <div className="flex items-end">
            <button
              onClick={buscarRelatorio}
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-1.5 px-4 rounded-md"
            >
              Buscar
            </button>
          </div>
        </div>

        {loading ? (
          <p className="text-center text-gray-600">Carregando dados...</p>
        ) : data.length > 0 ? (
          <BarChart
            xAxis={[{ id: 'categorias', data: labels }]}
            series={[{ label: reportName, data, xAxisId: 'categorias' }]}
            height={300}
          />
        ) : (
          <p className="text-center text-gray-500">Nenhum dado encontrado.</p>
        )}
      </div>
    </div>
  )
}
