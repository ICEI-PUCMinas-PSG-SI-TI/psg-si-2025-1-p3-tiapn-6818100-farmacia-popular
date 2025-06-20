// src/pages/Login.jsx
import React from "react"
import { useAuth } from "../hooks/useAuth"

const Login = () => {
  const { login, error, loading } = useAuth()
  const [matricula, setMatricula] = React.useState("")
  const [cargo, setCargo] = React.useState("Gerente")
  const [senha, setSenha] = React.useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { token, username } = await login(matricula, senha)
      console.log("Usuário logado:", username)
      window.location.href = "/home"
    } catch (err) {
      console.error('Erro no login:', err)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center w-100">
      <div className="bg-white bg-opacity-50 backdrop-blur-md p-8 rounded-xl shadow-lg w-full max-w-md border border-cyan-200">
        <div className="flex flex-col items-center mb-6">
          <div className="bg-cyan-400 rounded-full p-4 border-4 border-white shadow-md -mt-16 mb-4">
            <img src="logo.svg" alt="logo" className="w-16 h-16" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">ESTOQUE+</h1>
        </div>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="matricula" className="block text-sm font-medium text-gray-700">
              Matrícula
            </label>
            <input
              id="matricula"
              name="matricula"
              type="text"
              value={matricula}
              onChange={(e) => setMatricula(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
              required
            />
          </div>

          <div>
            <label htmlFor="cargo" className="block text-sm font-medium text-gray-700">
              Cargo
            </label>
            <select
              id="cargo"
              name="cargo"
              value={cargo}
              onChange={(e) => setCargo(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
            >
              <option value="Gerente">Gerente</option>
              <option value="Funcionario">Funcionário</option>
            </select>
          </div>

          <div>
            <label htmlFor="senha" className="block text-sm font-medium text-gray-700">
              Senha
            </label>
            <input
              id="senha"
              name="senha"
              type="password"
              placeholder="*****"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
              required
            />
          </div>

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="mt-4 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded-md transition disabled:opacity-50"
          >
            {loading ? "Entrando..." : "ENTRAR"}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
