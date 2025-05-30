import { Boxes, ShoppingCart, Users, BarChart2, Package } from "lucide-react"

export default function Menu() {
  const cards = [
    { title: "Usuários", icon: <Users className="w-8 h-8" /> },
    { title: "Produtos", icon: <Boxes className="w-8 h-8" /> },
    { title: "Vendas", icon: <ShoppingCart className="w-8 h-8" /> },
    { title: "Relatório Financeiro", icon: <BarChart2 className="w-8 h-8" /> },
    { title: "Relatório Estoque", icon: <Package className="w-8 h-8" /> },
  ]

  return (
    <div className="flex flex-col items-center justify-center p-6 overflow-hidden ">
      <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 text-center">
        Bem vindo, <span className="text-red-600 font-semibold">Usuário (name)</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="w-64 h-44 bg-white/60 backdrop-blur-sm shadow-md hover:shadow-lg transition-all rounded-2xl flex items-center justify-center "
          >
            <div className="flex flex-col items-center justify-center space-y-3 text-gray-800 ">
              {card.icon}
              <span className="font-semibold text-lg text-center">
                {card.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
