import { Box, Pencil } from "lucide-react"
import Autocomplete from 'react-select'


const productData = [
  { name: "Remedio", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's .", price: "99,99", lote: "123", area: "4/50" },
  { name: "Remedio 1", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's .", price: "99,99", lote: "123", area: "4/50" },
  { name: "Remedio 2", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's .", price: "99,99", lote: "123", area: "4/50" },
  { name: "Remedio 3", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's .", price: "99,99", lote: "123", area: "4/50" },

]

const options = [
  { value: 'Remedio',   label: 'Remedio' },
  { value: 'Remedio 1', label: 'Remedio 1 ' },
  { value: 'Remedio 2', label: 'Remedio 2' }
]

export default function ProductList() {

  return (
    <>
      <div className="h-screen flex flex-col justify-start overflow-hidden pt-25">
        <div className="p-6 bg-white/60 from-white to-blue-200 shadow-md max-w-2xl w-150 mx-auto rounded-lg ">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">Produtos</h2>
            <button className="flex items-center gap-1 text-sm font-semibold text-blue-700 hover:underline">
              Pesquisar Produtos
              <Box className="w-4 h-4 text-gray-500" />
            </button>
          </div>
          <div className="m-2">
            <Autocomplete options={options} className="w-53 rounded-md" placeholder="Pesquisar" />
          </div>

          <div className="max-h-100 overflow-y-auto space-y-4 scrollbar-custom rounded-md">
            {productData.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-md shadow-sm px-4 py-3 flex flex-col space-y-1"
              >
                <div className="flex items-center justify-between font-semibold text-gray-800">
                  <div className="flex items-center gap-2">
                    <button className="p-1 rounded-full hover:bg-gray-200">
                      <Pencil className="w-4 h-4 text-gray-500" />
                    </button>
                    <p>{product.name}</p>
                  </div>
                  <p>R$ {product.price}</p>
                </div>
                <div iv className="text-gray-600 bg-gray-200 rounded-md p-1 ml-8 flex flex-col">
                  <div className="m-1">{product.description}</div>
                  <div className="flex justify-end">
                    <p className="m-1"><b>Lote:</b> {product.lote}</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <p className="m-1"><b>Area do Produto:</b> {product.area}</p>
                </div>
              </div>

            ))}
          </div>
        </div>
      </div>
    </>
  )
}
