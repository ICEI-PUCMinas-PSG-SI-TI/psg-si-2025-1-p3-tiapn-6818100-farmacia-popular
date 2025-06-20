import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import api from '../services/api'

export default function ModalCadastrarProduto({ onClose }) {
  const [open, setOpen] = useState(true)

  const [descricao, setDescricao] = useState('')
  const [preco, setPreco] = useState('')
  const [quantidade, setQuantidade] = useState('')
  const [validade, setValidade] = useState('')
  const [lote, setLote] = useState('')
  const [laboratorio, setLaboratorio] = useState('')

  const handleClose = () => {
    setOpen(false)
    onClose?.()
  }

  async function handleSubmit() {
    // Validações simples
    if (!descricao.trim()) {
      alert('Informe a descrição do produto')
      return
    }
    if (!preco || Number(preco) <= 0) {
      alert('Informe um preço válido')
      return
    }
    if (!quantidade || Number(quantidade) < 0) {
      alert('Informe uma quantidade válida')
      return
    }
    if (!validade) {
      alert('Informe a validade')
      return
    }
    if (!lote.trim()) {
      alert('Informe o lote')
      return
    }
    if (!laboratorio.trim()) {
      alert('Informe o laboratório')
      return
    }

    try {
      const payload = {
        descricao: descricao.trim(),
        preco: Number(preco),
        quantidade: Number(quantidade),
        validade,
        lote: lote.trim(),
        laboratorio: laboratorio.trim()
      }
      await api.post('produtos/', payload)
      alert('Produto cadastrado com sucesso!')
      handleClose()
    } catch (error) {
      console.error('Erro ao cadastrar produto:', error)
      alert('Erro ao cadastrar produto')
    }
  }

  return (
    <Dialog open={open} onClose={handleClose} className="relative z-10">
      <DialogBackdrop className="fixed inset-0 bg-gray-500/75" />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                  <DialogTitle
                    as="h3"
                    className="text-lg font-semibold leading-6 text-gray-900 mb-4"
                  >
                    CADASTRAR PRODUTO
                  </DialogTitle>

                  <div className="mt-2 grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="descricao" className="block text-sm font-medium text-gray-700 mb-1">
                        Descrição
                      </label>
                      <input
                        type="text"
                        id="descricao"
                        value={descricao}
                        onChange={e => setDescricao(e.target.value)}
                        className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                        placeholder="Nome do produto"
                      />
                    </div>

                    <div>
                      <label htmlFor="preco" className="block text-sm font-medium text-gray-700 mb-1">
                        Preço
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        min="0"
                        id="preco"
                        value={preco}
                        onChange={e => setPreco(e.target.value)}
                        className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                        placeholder="Ex: 15.50"
                      />
                    </div>

                    <div>
                      <label htmlFor="quantidade" className="block text-sm font-medium text-gray-700 mb-1">
                        Quantidade
                      </label>
                      <input
                        type="number"
                        min="0"
                        id="quantidade"
                        value={quantidade}
                        onChange={e => setQuantidade(e.target.value)}
                        className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                        placeholder="Quantidade em estoque"
                      />
                    </div>

                    <div>
                      <label htmlFor="validade" className="block text-sm font-medium text-gray-700 mb-1">
                        Validade
                      </label>
                      <input
                        type="date"
                        id="validade"
                        value={validade}
                        onChange={e => setValidade(e.target.value)}
                        className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                      />
                    </div>

                    <div>
                      <label htmlFor="lote" className="block text-sm font-medium text-gray-700 mb-1">
                        Lote
                      </label>
                      <input
                        type="text"
                        id="lote"
                        value={lote}
                        onChange={e => setLote(e.target.value)}
                        className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                        placeholder="Lote do produto"
                      />
                    </div>

                    <div>
                      <label htmlFor="laboratorio" className="block text-sm font-medium text-gray-700 mb-1">
                        Laboratório
                      </label>
                      <input
                        type="text"
                        id="laboratorio"
                        value={laboratorio}
                        onChange={e => setLaboratorio(e.target.value)}
                        className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                        placeholder="Fabricante"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 justify-between">
              <button
                type="button"
                onClick={handleSubmit}
                className="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
              >
                Cadastrar Produto
              </button>
              <button
                type="button"
                onClick={handleClose}
                className="inline-flex justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500"
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
