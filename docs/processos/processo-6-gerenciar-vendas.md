### 3.3.6 Processo 6 – GERENCIAR VENDAS

Este processo tem o objetivo de alterar um pedido já finalizado em situações, como por exemplo, (i) em que o cliente não deseja mais levar algum item, (ii) devolução de algum item, (iii) excluir o pedido completo etc.

O processo se inicia com um gerente acessando o sistema e selecionando a opção "Vendas", em seguida consulta o histórico, clica no pedido a ser editado ou excluído. Os pedidos são ordenados por data e hora mais recentes. O sistema permite:
* Incluir de itens;
* Excluir de itens;
* Excluir a venda (pedido);

O gerente pode atualizar os dados ou excluir. O sistema atualiza as informações no banco de dados, informa o status da operação e o processo é finalizado. Caso o gerente escolha a opção cancelar, o processo é encerrado sem alterar dados no sistema.

![Gerenciar Vendas](../images/06-gerenciar-vendas.png "Gerenciar Vendas.")

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

| **Comandos**       |  **Destino**                   | **Tipo**            |
| ---                | ---                            | ---                 |
| [Vendas]           | Tela de Vendas (Carrinho) | default  |


**Atividade 3 - Consultar Histórico**
| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |

| **Comandos**         |  **Destino**                   | **Tipo**            |
| ---                  | ---                            | ---                 |
| [Consultar Histórico]| Histórico de Vendas |  Botão  |


**Atividade 4 - Consultar Histórico**
| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |

| **Comandos**         |  **Destino**                   | **Tipo**            |
| ---                  | ---                            | ---                 |
| [Editar Pedido (lápis)] | Tela com itens              |  Botão  |
| [Excluir Pedido] | ---              |  Botão  |
| [Cancelar]       | ---              |  cancelar  |


