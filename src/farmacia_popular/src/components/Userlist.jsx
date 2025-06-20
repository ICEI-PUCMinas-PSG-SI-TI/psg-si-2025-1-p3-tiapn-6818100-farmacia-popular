import { useState } from "react"
import { Pencil } from "lucide-react"
import ModalEditUser from "./ModalEditUser"
import ModalAddUser from "./ModalAddUser"

const usersData = [
  { name: "Pedro Henrique Lafaiate", matricula: "123456", cargo: "Caixa", status: "Ativo", password: "12345678" },
  { name: "Lana Luiza Carvalho", matricula: "654987", cargo: "Farmaceutico", status: "Ativo", password: "12345678" },
  { name: "Marta Stuart Legorio", matricula: "987264", cargo: "Gerente", status: "Ativo", password: "12345678" },
  { name: "Pedro Henrique Lafaiate", matricula: "123456", cargo: "Caixa", status: "Ativo", password: "12345678" },
  { name: "Lana Luiza Carvalho", matricula: "654987", cargo: "Farmaceutico", status: "Ativo", password: "12345678" },
  { name: "Marta Stuart Legorio", matricula: "987264", cargo: "Gerente", status: "Ativo", password: "12345678" },
]

export default function UserList() {
  const [selectedUser, setSelectedUser] = useState(null)
  const [showAddUserModal, setShowAddUserModal] = useState(false)

  return (
    <>
      <div className="h-screen flex flex-col justify-start overflow-hidden pt-25">
        <div className="p-6 bg-white/60 from-white to-blue-200 shadow-md max-w-2xl w-150 mx-auto rounded-lg ">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">Usuários</h2>
            <button className="flex items-center gap-1 text-sm font-semibold text-blue-700 hover:underline" onClick={() => setShowAddUserModal(true)}>
              Adicionar Usuário
              <span className="text-lg">+</span>
            </button>
          </div>

          <div className="max-h-100 overflow-y-auto space-y-4 scrollbar-custom rounded-md">
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

      {showAddUserModal && (
        <ModalAddUser
          onClose={() => setShowAddUserModal(false)}
        />
      ) }
    </>
  )
}
