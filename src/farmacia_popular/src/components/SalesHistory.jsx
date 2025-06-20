import { useState } from "react";
import { Box } from "lucide-react";
import ModalAddSalle from "./ModalAddSalle";

const salesData = [
  { product: "Remédio A", seller: "João Silva", quantity: 2, price: "199,98", date: "20/06/2025" },
  { product: "Remédio B", seller: "Maria Souza", quantity: 1, price: "99,99", date: "19/06/2025" },
  { product: "Remédio C", seller: "Carlos Lima", quantity: 3, price: "299,97", date: "18/06/2025" },
  { product: "Remédio D", seller: "Ana Paula", quantity: 2, price: "199,98", date: "17/06/2025" },
];

export default function SalesHistory() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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

          <div className="max-h-100 overflow-y-auto space-y-4 scrollbar-custom rounded-md">
            {salesData.map((sale, index) => (
              <div
                key={index}
                className="bg-white rounded-md shadow-sm px-4 py-3 flex flex-col space-y-1"
              >
                <div className="flex items-center justify-between font-semibold text-gray-800">
                  <div className="flex flex-col">
                    <p>{sale.product}</p>
                    <p className="text-sm text-gray-600">Comprador: {sale.seller}</p>
                  </div>
                  <p>R$ {sale.price}</p>
                </div>
                <div className="text-gray-600 bg-gray-200 rounded-md p-1 ml-2 flex flex-col">
                  <div className="flex justify-between px-2">
                    <p><b>Quantidade:</b> {sale.quantity}</p>
                    <p><b>Data:</b> {sale.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && <ModalAddSalle onClose={handleCloseModal} />}
    </>
  );
}
