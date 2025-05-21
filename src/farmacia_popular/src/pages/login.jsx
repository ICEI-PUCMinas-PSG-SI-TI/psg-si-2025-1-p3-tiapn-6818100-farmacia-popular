import React from 'react'

const Login = () => {
    return (
        <div>
            <div className="loginBox container">
                <div className="logoBox">
                    <img className='logoimg ' src="logo.svg" alt="logo"/>
                    <h1>ESTOQUE+</h1>
                </div>
                <div>
                    <form action="">
                        <label for="matricula">Matricula</label>
                        <input name='matricula' id='matricula' type="text"/>

                        <label htmlFor="Cargos">Cargo</label>
                        <select id="Cargos" name="Cargos">
                            <option value="Gerente">Gerente</option>
                            <option value="Funcionario">Funcionário</option>
                        </select>

                        <label for="senha">Senha</label>
                        <input name='senha' id='senha' type="password"/>
                        <button type='button'>ENTRAR</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login
