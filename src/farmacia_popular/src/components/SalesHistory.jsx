import { useState, useEffect } from "react"
import { Box } from "lucide-react"
import ModalAddSalle from "./ModalAddSalle"
import api from "../services/api"

function formatDate(dateString) {
  if (!dateString) return "Data inválida"
  const date = new Date(dateString)
  if (isNaN(date)) return "Data inválida"

  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()

  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const seconds = String(date.getSeconds()).padStart(2, '0')

  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`
}

export default function SalesHistory() {
  const [sales, setSales] = useState([])
  const [funcionarios, setFuncionarios] = useState([])
  const [loading, setLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      try {
        const [salesRes, funcionariosRes] = await Promise.all([
          api.get('pedidos/'),
          api.get('funcionarios/')
        ])
        setSales(salesRes.data)
        setFuncionarios(funcionariosRes.data)
      } catch (error) {
        console.error("Erro ao buscar dados:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  // Criar um mapa id -> nome para lookup rápido
  const funcionariosMap = {}
  funcionarios.forEach(f => {
    funcionariosMap[f.id] = f.nome
  })

  const handleOpenModal = () => setIsModalOpen(true)
  const handleCloseModal = () => setIsModalOpen(false)

  return (
    <>
      <div className="h-screen flex flex-col justify-start overflow-hidden pt-25">
        <div className="p-6 bg-white/60 from-white to-blue-200 shadow-md max-w-2xl w-150 mx-auto rounded-lg ">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">Histórico de Vendas</h2>
            <button
              onClick={handleOpenModal}
              className="flex items-center gap-1 text-sm font-semibold text-blue-700 hover:underline"
            >
              Realizar Venda
              <Box className="w-4 h-4 text-gray-500" />
            </button>
          </div>

          <div className="max-h-100 overflow-y-auto space-y-6 scrollbar-custom rounded-md">
            {loading ? (
              <p className="text-center text-gray-500">Carregando vendas...</p>
            ) : sales.length === 0 ? (
              <p className="text-center text-gray-500">Nenhuma venda encontrada.</p>
            ) : (
              sales.map((sale) => (
                <div
                  key={sale.id}
                  className="bg-white rounded-md shadow-sm px-4 py-4 flex flex-col space-y-3"
                >
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-gray-800">Pedido #{sale.id}</p>
                    <p className="text-gray-600 text-sm">{formatDate(sale.data)}</p>
                  </div>

                  <p className="text-gray-700">
                    <b>Funcionário:</b> {funcionariosMap[sale.id_funcionario] || `ID ${sale.id_funcionario}`}
                  </p>

                  <div className="bg-gray-100 rounded p-3 space-y-2">
                    {sale.items.map((item) => (
                      <div
                        key={item.id}
                        className="flex justify-between text-gray-800"
                      >
                        <div>
                          <p><b>Item {item.numero_item}</b></p>
                          <p>Produto : {item.descricao}</p>
                          <p>Quantidade: {item.quantidade}</p>
                        </div>
                        <div className="text-right">
                          <p>Preço Unit.: R$ {item.preco.toFixed(2)}</p>
                          <p><b>Total:</b> R$ {(item.preco * item.quantidade).toFixed(2)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {isModalOpen && <ModalAddSalle onClose={handleCloseModal} />}
    </>
  )
}
