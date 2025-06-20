import { Box, Pencil } from "lucide-react"
import Autocomplete from 'react-select'
import { useEffect, useState } from "react"
import api from "../services/api"
import ModalCadastrarProduto from './ModalCadastrarProduto'

export default function ProductList() {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedOption, setSelectedOption] = useState(null)
  const [showModalCadastrar, setShowModalCadastrar] = useState(false)

  const fetchProducts = () => {
    setLoading(true)
    api.get('produtos/')
      .then(response => {
        setProducts(response.data)
        setFilteredProducts(response.data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const options = products.map(product => ({
    value: product.id,
    label: product.descricao
  }))

  const handleChange = (option) => {
    setSelectedOption(option)

    if (option) {
      const filtered = products.filter(p => p.id === option.value)
      setFilteredProducts(filtered)
    } else {
      setFilteredProducts(products)
    }
  }

  const handleOpenModal = () => {
    setShowModalCadastrar(true)
  }

  const handleCloseModal = () => {
    setShowModalCadastrar(false)
    fetchProducts()
  }

  return (
    <>
      <div className="h-screen flex flex-col justify-start overflow-hidden pt-25">
        <div className="p-6 bg-white/60 from-white to-blue-200 shadow-md max-w-2xl w-150 mx-auto rounded-lg ">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">Produtos</h2>
            <button
              type="button"
              onClick={() => {
                console.log('Abrindo modal')
                handleOpenModal()
              }}
              className="flex items-center gap-1 text-sm font-semibold text-blue-700 hover:underline"
            >
              Cadastrar Produtos
              <Box className="w-4 h-4 text-gray-500" />
            </button>
          </div>

          <div className="m-2">
            <Autocomplete
              options={options}
              className="w-53 rounded-md"
              placeholder="Pesquisar"
              isClearable
              value={selectedOption}
              onChange={handleChange}
              isSearchable
            />
          </div>

          <div className="max-h-100 overflow-y-auto space-y-4 scrollbar-custom rounded-md">
            {loading ? (
              <p className="text-center text-gray-500"><b>Carregando produtos...</b></p>
            ) : (
              filteredProducts.length > 0 ? (
                filteredProducts.map((product, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-md shadow-sm px-4 py-3 flex flex-col space-y-1"
                  >
                    <div className="flex items-center justify-between font-semibold text-gray-800">
                      <div className="flex items-center gap-1">
                        <p>{product.descricao}</p>
                      </div>
                      <p>R$ {product.preco.toFixed(2)}</p>
                    </div>

                    <div className="text-gray-600 bg-gray-200 rounded-md p-1  flex flex-col">
                      <div className="m-1"><b>Quantidade:</b> {product.quantidade}</div>
                      <div className="m-1"><b>Validade:</b> {product.validade}</div>
                      <div className="flex justify-between items-center">
                        <div className="m-1"><b>Laboratório:</b> {product.laboratorio}</div>
                        <div className="m-1"><b>Lote:</b> {product.lote}</div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500">Nenhum produto encontrado.</p>
              )
            )}
          </div>
        </div>
      </div>

      {showModalCadastrar && <ModalCadastrarProduto onClose={handleCloseModal} />}
    </>
  )
}
