### 3.3.6 Processo 6 – GERENCIAR VENDAS

Este processo tem o objetivo de alterar um pedido já finalizado em situações, como por exemplo, (i) em que o cliente não deseja mais levar algum item, (ii) devoluções, (iii) excluir o pedido completo etc.

O processo se inicia com um gerente acessando o sistema e selecionando a opção "Vendas", em seguida consulta o histórico, clica no pedido a ser editado ou excluído. Os pedidos são ordenados por data e hora mais recentes. O sistema permite:
* Incluir de itens;
* Excluir de itens;
* Excluir a venda (pedido);

O gerente pode atualizar os dados ou excluir. O sistema atualiza as informações no banco de dados, informa o status da operação e o processo é finalizado. Caso o gerente escolha a opção cancelar, o processo é encerrado sem alterar dados no sistema.

![Gerenciar Vendas](../images/06-gerenciar-vendas.png "Gerenciar Vendas.")

#### Detalhamento das atividades

**Atividade 1 - Acessar o Sistema**

| **Campo**       | **Tipo**         | **Restrições**      | **Valor default** |
| ---             | ---              | ---                 | ---               |
| [Matrícula]     | [Caixa de Texto] | Gerada pelo sistema | ---     |
| [Senha]         | [Caixa de Texto] | --- | ---     |

| **Comandos**    |  **Destino**     | **Tipo**                 |
| ---             | ---              | ---                      |
| [Entrar]        | Tela Inicial (Selecionar processo)     | default      |


**Atividade 2 - Selecionar Opção Vendas**

| **Comandos**       |  **Destino**                   | **Tipo**            |
| ---                | ---                            | ---                 |
| [Vendas]           | Tela de Vendas (Carrinho) | default  |


**Atividade 3 - Consultar Histórico**

| **Comandos**         |  **Destino**                   | **Tipo**            |
| ---                  | ---                            | ---                 |
| [Consultar Histórico]| Histórico de Vendas |  Botão  |


**Atividade 4 - Alterar Pedido**

| **Comandos**         |  **Destino**                   | **Tipo**            |
| ---                  | ---                            | ---                 |
| [Editar Pedido (lápis)] | Tela com itens              |  Botão  |
| [Excluir Pedido] | ---              |  Botão  |
| [Cancelar]       | ---              |  cancelar  |


