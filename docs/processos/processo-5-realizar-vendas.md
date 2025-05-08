### 3.3.5 Processo 5 – REALIZAR VENDAS

O cliente solicita um produto e a quantidade desejada, o funcionário acessa o sistema, seleciona opção "Vendas", consulta a disponibilidade do item no estoque e apresenta o valor caso o item seja encontrado. Se o cliente optar pela compra, o produto é incluído no carrinho. O cliente pode solicitar mais produtos, que serão incluídos no pedido. Em seguida o carrinho é finalizado, é gerado o número do pedido e os dados são armazenados no banco de dados. Se o carrinho estiver vazio, o processo é encerrado.

O funcionário separa os itens, o cliente realiza o pagamento e os produtos são entregues. O sistema **não** irá gerenciar pagamento.

![Realizar Vendas](../images/05-realizar-vendas.png "Realizar Vendas.")

#### Detalhamento das atividades

_Descreva aqui cada uma das propriedades das atividades do processo. 
Devem estar relacionadas com o modelo de processo apresentado anteriormente._

_Os tipos de dados a serem utilizados são:_

_* **Área de texto** - campo texto de múltiplas linhas_

_* **Caixa de texto** - campo texto de uma linha_

_* **Número** - campo numérico_

_* **Data** - campo do tipo data (dd-mm-aaaa)_

_* **Hora** - campo do tipo hora (hh:mm:ss)_

_* **Data e Hora** - campo do tipo data e hora (dd-mm-aaaa, hh:mm:ss)_

_* **Imagem** - campo contendo uma imagem_

_* **Seleção única** - campo com várias opções de valores que são mutuamente exclusivas (tradicional radio button ou combobox)_

_* **Seleção múltipla** - campo com várias opções que podem ser selecionadas mutuamente (tradicional checkbox ou listbox)_

_* **Arquivo** - campo de upload de documento_

_* **Link** - campo que armazena uma URL_

_* **Tabela** - campo formado por uma matriz de valores_

**Atividade 1 - Acessar o Sistema**

| **Campo**       | **Tipo**         | **Restrições**      | **Valor default** |
| ---             | ---              | ---                 | ---               |
| [Matrícula]     | [Caixa de Texto] | Gerada pelo sistema | ---     |
| [Senha]         | [Caixa de Texto] | --- | ---     |

| **Comandos**    |  **Destino**     | **Tipo**                 |
| ---             | ---              | ---                      |
| [Entrar]        | Tela Inicial (Selecionar processo)     | default      |


**Atividade 2 - Selecionar Opção Vendas**
| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| --- | ---  |                |                   |

| **Comandos**         |  **Destino**                   | **Tipo**            |
| ---                  | ---                            | ---                 |
| [Vendas]           | Incluir Itens | default  |


**Atividade 3 - Clicar em Adicionar Produto**
| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| --- | ---  |                |                   |

| **Comandos**         |  **Destino**                   | **Tipo**            |
| ---                  | ---                            | ---                 |
| [Adicionar Produto]  | Incluir Itens                  | Botão |


**Atividade 4 - Incluir Itens**
| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |

| **Comandos**         |  **Destino**                   | **Tipo**            |
| ---                  | ---                            | ---                 |
| [Pesquisar Prodotu]  | ---                            |  Caixa de Pesquisa  |
| [Adicionar Produto]  | ---                            |  default            |
| [Finalizar]          | Fim do Processo                |  default           |
| [Cancelar]           | Fim do Processo                |  cancelar           |
