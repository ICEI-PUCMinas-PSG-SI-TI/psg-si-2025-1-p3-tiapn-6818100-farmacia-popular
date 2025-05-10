### 3.3.7 Processo 7 – RELATÓRIOS FINANCEIROS

O funcionário (ou gerente) acessa o sistema e clica na opção "Relatórios Financeiros", em seguida escolhe o tipo desejado na próxima tela:
* Vendas por período;
* Faturamento por período;

Caso o período não seja informado, será considerada a data atual. Em seguida o empregado deve confirmar a ação desejada, o sistema pesquisa as informações no banco de dados, gera o relatório, exibe os dados na tela e o processo é finalizado. Caso escolha a opção cancelar, o processo é finalizado.

![Relatórios Financeiros](../images/07-relatorios-financeiros.png "Relatórios Financeiros.")

#### Detalhamento das atividades

**Atividade 1 - Acessar o Sistema**

| **Campo**       | **Tipo**         | **Restrições**      | **Valor default** |
| ---             | ---              | ---                 | ---               |
| [Matrícula]     | [Caixa de Texto] | Gerada pelo sistema | ---     |
| [Senha]         | [Caixa de Texto] | --- | ---     |

| **Comandos**    |  **Destino**     | **Tipo**                 |
| ---             | ---              | ---                      |
| [Entrar]        | Tela Inicial (Selecionar processo)     | default      |


**Atividade 2 - Selecionar Opção Relatório Financeiro**
| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| --- | ---  |                |                   |

| **Comandos**           | **Destino**                  | **Tipo**            |
|------------------------|------------------------------| ---                 |
| [Relatório Financeiro] | Tela de Relatório Financeiro | default  |

**Atividade 3 - Inserir termos para gerar o relatório em tempo real**
| **Campo**| **Tipo**| **Restrições** | **Valor default** |
| [inicio]| [caixa de texto]| num|6 meses atrás|
| [fim]| [caixa de texto] |num|data atual|

| **Comandos** |  **Destino**                   | **Tipo**           |
|------------| ---                            | ---                 |
|            |  |  |
