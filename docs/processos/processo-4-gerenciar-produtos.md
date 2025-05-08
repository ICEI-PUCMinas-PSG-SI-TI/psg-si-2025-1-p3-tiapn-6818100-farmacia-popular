### 3.3.4 Processo 4 – GERENCIAR PRODUTOS

O processo se inicia com um funcionário (ou gerente) acessando o sistema e selecionando a opção "Produtos", em seguida pesquisa o produto desejado na lista informada pelo sistema, clica em editar, o sistema exibe os dados do produto permitindo alteração. Os campos disponíveis são:
* Descrição
* Preço
* Quantidade
* Lote
* Validade
* Laboratório

O funcionário pode atualizar os dados e em seguida clicar em confirmar, ou remover o produto clicando em excluir. O sistema atualiza as informações no banco de dados, informa o status da operação e o processo é finalizado. Caso escolha a opção cancelar, o processo finaliza sem alterar dados no sistema.

![Gerenciar Produtos](../images/04-gerenciar-produtos.png "Gerenciar Produtos.")

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


**Atividade 2 - Selecionar Opção Produtos**
| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| --- | ---  |                |                   |

| **Comandos**         |  **Destino**                   | **Tipo**            |
| ---                  | ---                            | ---                 |
| [Produtos]           | Clicar em Editar Produto | default  |


**Atividade 3 - Clicar em Editar Produto (Lápis)**
| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| --- | ---  |                |                   |

| **Comandos**         |  **Destino**                   | **Tipo**            |
| ---                  | ---                            | ---                 |
| [Editar Produto]     | Informar dados do produto      | default  |


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
| [Confirmar]          | Fim do Processo                |  default            |
| [Excluir Produto]    | Fim do Processo                |  Botão              |
| [Cancelar]           | Fim do Processo                |  cancelar           |

