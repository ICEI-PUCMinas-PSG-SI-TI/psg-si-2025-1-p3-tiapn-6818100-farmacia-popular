import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'

export default function ModalAddSalle({ onClose }) {
    const [open, setOpen] = useState(true)

    const handleClose = () => {
        setOpen(false)
        onClose?.()
    }

    return (    
        <Dialog open={open} onClose={handleClose} className="relative z-10">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
                    >
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                                    <DialogTitle as="h3" className="text-lg font-semibold leading-6 text-gray-900 mb-4">
                                        REALIZAR VENDA
                                    </DialogTitle>

                                    <div className="mt-2 grid grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="produto" className="block text-sm font-medium text-gray-700 mb-1">
                                                Produto
                                            </label>
                                            <input
                                                type="text"
                                                name="produto"
                                                id="produto"
                                                placeholder="Nome do produto"
                                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="comprador" className="block text-sm font-medium text-gray-700 mb-1">
                                                Comprador
                                            </label>
                                            <input
                                                type="text"
                                                name="comprador"
                                                id="comprador"
                                                placeholder="Nome do comprador"
                                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="quantidade" className="block text-sm font-medium text-gray-700 mb-1">
                                                Quantidade
                                            </label>
                                            <input
                                                type="number"
                                                name="quantidade"
                                                id="quantidade"
                                                placeholder="0"
                                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="data" className="block text-sm font-medium text-gray-700 mb-1">
                                                Data
                                            </label>
                                            <input
                                                type="date"
                                                name="data"
                                                id="data"
                                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 justify-between">
                            <button
                                type="button"
                                onClick={handleClose}
                                className="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                            >
                                Confirmar Venda
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
