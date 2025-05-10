### 3.3.5 Processo 5 – REALIZAR VENDAS

O cliente solicita um produto e a quantidade desejada, o funcionário acessa o sistema, seleciona opção "Vendas", consulta a disponibilidade do item no estoque e apresenta o valor caso o item seja encontrado. Se o cliente optar pela compra, o produto é incluído no carrinho. O cliente pode solicitar mais produtos, que serão incluídos no pedido. Em seguida o carrinho é finalizado, é gerado o número do pedido e os dados são armazenados no banco de dados. Se o carrinho estiver vazio, o processo é encerrado.

O funcionário separa os itens, o cliente realiza o pagamento e os produtos são entregues. O sistema **não** irá gerenciar pagamento.

![Realizar Vendas](../images/05-realizar-vendas.png "Realizar Vendas.")

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

| **Comandos**         |  **Destino**                   | **Tipo**            |
| ---                  | ---                            | ---                 |
| [Vendas]           | Incluir Itens | default  |


**Atividade 3 - Incluir Itens**

| **Comandos**         |  **Destino**                   | **Tipo**            |
| ---                  | ---                            | ---                 |
| [Pesquisar Produto]  | ---                            |  Caixa de Pesquisa  |
| [Adicionar Ao Carrinho]  | Incluir Itens                  | Botão |
| [Finalizar]          | Fim do Processo                |  default           |
| [Cancelar]           | Fim do Processo                |  cancelar           |
