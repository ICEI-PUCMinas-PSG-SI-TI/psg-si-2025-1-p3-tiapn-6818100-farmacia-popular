import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import api from '../services/api'

export default function ModalAddSalle({ onClose }) {
  const [open, setOpen] = useState(true)
  const [produto, setProduto] = useState('')
  const [quantidade, setQuantidade] = useState('')
  const [itens, setItens] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleClose = () => {
    setOpen(false)
    onClose?.()
  }

  const handleAddItem = () => {
    if (produto && quantidade) {
      const novoItem = {
        id_produto: Number(produto),
        quantidade: Number(quantidade)
      }
      setItens(prev => [...prev, novoItem])
      setProduto('')
      setQuantidade('')
    }
  }

  const handleSubmit = async () => {
    if (itens.length === 0) {
      setError('Adicione pelo menos um produto')
      return
    }

    setLoading(true)
    setError(null)

    try {
      await api.post('/pedidos', {
        id_funcionario: 1,
        items: itens
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })

      setLoading(false)
      handleClose()
    } catch {
      setLoading(false)
      setError('Erro ao salvar a venda')
    }
  }

  return (
    <Dialog open={open} onClose={handleClose} className="relative z-10">
      <DialogBackdrop className="fixed inset-0 bg-gray-500/75" />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <DialogTitle as="h3" className="text-lg font-semibold leading-6 text-gray-900 mb-4">
                REALIZAR VENDA
              </DialogTitle>

              <div className="grid grid-cols-2 gap-4 mb-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">ID Produto</label>
                  <input
                    type="number"
                    value={produto}
                    onChange={(e) => setProduto(e.target.value)}
                    className="block w-full rounded-md border p-2 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Quantidade</label>
                  <input
                    type="number"
                    value={quantidade}
                    onChange={(e) => setQuantidade(e.target.value)}
                    className="block w-full rounded-md border p-2 text-sm"
                  />
                </div>
              </div>

              <button
                type="button"
                onClick={handleAddItem}
                className="mb-4 bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-500"
              >
                Adicionar Produto
              </button>

              {itens.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-sm font-bold mb-2">Produtos na venda:</h4>
                  <ul className="text-sm text-gray-700 list-disc pl-4">
                    {itens.map((item, idx) => (
                      <li key={idx}>
                        Produto ID {item.id_produto} - Quantidade: {item.quantidade}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </div>

            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 justify-between">
              <button
                type="button"
                onClick={handleSubmit}
                disabled={loading}
                className="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
              >
                {loading ? 'Salvando...' : 'Confirmar Venda'}
              </button>
              <button
                type="button"
                onClick={handleClose}
                className="inline-flex justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white hover:bg-red-500"
              >
                Cancelar
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
