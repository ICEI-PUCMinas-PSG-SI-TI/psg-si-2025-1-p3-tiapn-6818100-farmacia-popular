### 3.3.3 Processo 3 – CADASTRAR PRODUTOS

O processo se inicia com um funcionário (ou gerente) acessando o sistema, selecionando a opção "Produtos", em seguida clica em adicionar produto e depois informa os dados:
* Descrição
* Preço
* Quantidade
* Lote
* Validade
* Laboratório

O funcionário confirma a ação deseja, o sistema atualiza as informações no banco de dados, informa o status da operação e o processo é finalizado. Caso escolha a opção cancelar, o processo finaliza sem alterar dados no sistema.

![Cadastrar Produtos](../images/03-cadastrar-produtos.png "Cadastrar Produtos.")

#### Detalhamento das atividades

**Atividade 1 - Acessar o Sistema**

| **Campo**       | **Tipo**         | **Restrições**      | **Valor default** |
| ---             | ---              | ---                 | ---               |
| [Matrícula]     | [Caixa de Texto] | Gerada pelo sistema | ---     |
| [Senha]         | [Caixa de Texto] | --- | ---     |

| **Comandos**    |  **Destino**     | **Tipo**                 |
| ---             | ---              | ---                      |
| [Entrar]        | Tela Inicial (Selecionar processo)     | default      |


**Atividade 2 - Selecionar Opção Produtos**
| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| --- | ---  |                |                   |

| **Comandos**         |  **Destino**                   | **Tipo**            |
| ---                  | ---                            | ---                 |
| [Produtos]           | Clicar em Adicionar Produto | default  |


**Atividade 3 - Clicar em Adicionar Produto**
| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| --- | ---  |                |                   |

| **Comandos**         |  **Destino**                   | **Tipo**            |
| ---                  | ---                            | ---                 |
| [Adicionar Usuário]  | Informar dados do produto      | Botão |


**Atividade 4 - Informar Dados do Produto**
| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| [Descrição]          | [Caixa de Texto] | Não pode ser vazio |                   |
| [Validade]         | [Data]  | Não pode ser inferior à data atual | --- |
| [Preço]         | [Número] | Não poder negativo | --- |
| [Estoque]       | [Número]  | --- | --- |
| [Lote]       | [Caixa de Texto]  | --- | --- |
| [Laboratório]       | [Caixa de Texto]  | --- | --- |

| **Comandos**         |  **Destino**                   | **Tipo**            |
| ---                  | ---                            | ---                 |
| [Cadastrar]          | Fim do Processo                |  default            |
| [Cancelar]           | Fim do Processo                |  cancelar           |
