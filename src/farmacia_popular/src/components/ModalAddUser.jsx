import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import api from '../services/api'

export default function ModalEditUser({ onClose }) {
  const [open, setOpen] = useState(true)
  const [form, setForm] = useState({
    nome: '',
    cargo: '',
    ativo: '',
    senha: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleClose = () => {
    setOpen(false)
    onClose?.()
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async () => {
    setLoading(true)
    setError(null)
    try {
      await api.post('/funcionarios', JSON.stringify({
        nome: form.nome,
        cargo: form.cargo,
        ativo: form.ativo,
        senha: form.senha
      }), {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      setLoading(false)
      handleClose()
    } catch {
      setLoading(false)
      setError('Erro ao cadastrar usuário')
    }
  }

  return (
    <Dialog open={open} onClose={handleClose} className="relative z-10">
      <DialogBackdrop className="fixed inset-0 bg-gray-500/75 transition-opacity" />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                  <DialogTitle as="h3" className="text-lg font-semibold leading-6 text-gray-900 mb-4">
                    ADICIONAR USUÁRIO
                  </DialogTitle>
                  <div className="mt-2 grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
                        Nome
                      </label>
                      <input
                        type="text"
                        name="nome"
                        id="nome"
                        value={form.nome}
                        onChange={handleChange}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                      />
                    </div>
                    <div>
                      <label htmlFor="cargo" className="block text-sm font-medium text-gray-700 mb-1">
                        Cargo
                      </label>
                      <select
                        name="cargo"
                        id="cargo"
                        value={form.cargo}
                        onChange={handleChange}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                      >
                        <option value=""></option>
                        <option value="EMPREGADO">Gerente</option>
                        <option value="FUNCIONARIO">Funcionario</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="senha" className="block text-sm font-medium text-gray-700 mb-1">
                        Senha
                      </label>
                      <input
                        type="password"
                        name="senha"
                        id="senha"
                        value={form.senha}
                        onChange={handleChange}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                      />
                    </div>
                    <div>
                      <label htmlFor="ativo" className="block text-sm font-medium text-gray-700 mb-1">
                        Status
                      </label>
                      <select
                        name="ativo"
                        id="ativo"
                        value={form.ativo}
                        onChange={handleChange}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                      >
                        <option value=""></option>
                        <option value="SIM">Ativo</option>
                        <option value="NAO">Inativo</option>
                      </select>
                    </div>
                  </div>
                  {error && <p className="text-red-500 mt-2">{error}</p>}
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 justify-between">
              <button
                type="button"
                disabled={loading}
                onClick={handleSubmit}
                className="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 disabled:opacity-50"
              >
                {loading ? 'Salvando...' : 'Confirmar'}
              </button>
              <button
                type="button"
                disabled={loading}
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
