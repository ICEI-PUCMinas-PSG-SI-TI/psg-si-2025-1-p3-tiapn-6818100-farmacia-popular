import { useState } from "react"
import { Pencil } from "lucide-react"
import ModalEditUser from "./ModalEditUser"

const usersData = [
  { name: "Pedro Henrique Lafaiate", matricula: "123456", cargo: "Caixa", status: "Ativo" },
  { name: "Lana Luiza Carvalho", matricula: "654987", cargo: "Farmaceutico", status: "Ativo" },
  { name: "Marta Stuart Legorio", matricula: "987264", cargo: "Gerente", status: "Ativo" },
  { name: "Pedro Henrique Lafaiate", matricula: "123456", cargo: "Caixa", status: "Ativo" },
  { name: "Lana Luiza Carvalho", matricula: "654987", cargo: "Farmaceutico", status: "Ativo" },
  { name: "Marta Stuart Legorio", matricula: "987264", cargo: "Gerente", status: "Ativo" },
]

export default function UserList() {
  const [selectedUser, setSelectedUser] = useState(null)

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center">
        <div className="p-6 bg-gradient-to-b from-white to-blue-200 shadow-md max-w-2xl w-150 mx-auto rounded-lg ">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">Usuários</h2>
            <button className="flex items-center gap-1 text-sm font-semibold text-blue-700 hover:underline">
              Adicionar Usuário
              <span className="text-lg">+</span>
            </button>
          </div>

          <div className="max-h-75 overflow-y-auto space-y-4 scrollbar-custom rounded-md">
            {usersData.map((user, index) => (
              <div
                key={index}
                className="bg-white rounded-md shadow-sm px-4 py-3 flex flex-col space-y-1"
              >
                <div className="flex items-center gap-2 font-semibold text-gray-800">
                  <button
                    onClick={() => setSelectedUser(user)}
                    className="p-1 rounded-full hover:bg-gray-200"
                  >
                    <Pencil className="w-4 h-4 text-gray-500" />
                  </button>
                  {user.name}
                </div>
                <div className="text-gray-600">{user.matricula}</div>
                <div className="text-gray-600">{user.cargo}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedUser && (
        <ModalEditUser
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
        />
      )}
    </>
  )
}
