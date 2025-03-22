# Especificações do Projeto

O problema central a ser resolvido neste projeto é a falta de um sistema integrado e informatizado para gerenciar os principais processos operacionais de uma farmácia popular, incluindo o cadastro de produtos, o controle de estoque, a gestão de fornecedores e o rastreamento de medicamentos. A ausência de um controle eficiente pode resultar em erros no registro de informações, desorganização no estoque, atrasos na reposição de mercadorias e dificuldades no cumprimento das regulamentações sanitárias. Além disso, a falta de visibilidade sobre os produtos e fornecedores impacta diretamente a qualidade do atendimento ao cliente e a rentabilidade do negócio. Dessa forma, torna-se necessário o desenvolvimento de uma aplicação web que centralize e informatize esses processos, garantindo maior precisão, agilidade e segurança na gestão da farmácia. Citar o problema específico de pequenas farmácias.

## Personas

Persona 1 - João Silva

Idade: 28 anos

Profissão: Atendente e operador de caixa em uma farmácia de bairro

Experiência com tecnologia: Básica, utiliza smartphone para redes sociais e navegação na internet, mas tem pouca experiência com sistemas de gestão.

Desafios: Atualmente, precisa registrar manualmente as vendas em um caderno e conferir o estoque diariamente para evitar a falta de produtos. Tem dificuldade em localizar rapidamente medicamentos no estoque e costuma perder tempo procurando informações sobre fornecedores.

Interação com a aplicação: João utilizará a aplicação principalmente para registrar vendas, atualizar o estoque e consultar produtos disponíveis. Ele precisa de um sistema intuitivo, com menus claros e rápidos, para evitar erros e otimizar seu tempo de atendimento. A funcionalidade de alertas para reposição de estoque será especialmente útil para ajudá-lo a evitar a falta de medicamentos essenciais.

Persona 2 - Maria Souza (Proprietária da Farmácia)

Idade: 45 anos

Profissão: Proprietária e gestora de uma farmácia em uma cidade do interior

Experiência com tecnologia: Moderada, usa o computador para tarefas administrativas básicas, como controle de caixa e emissão de notas fiscais, mas não tem experiência com sistemas complexos de gestão.

Desafios: Maria precisa acompanhar as finanças da farmácia, gerenciar o estoque e lidar com fornecedores, mas encontra dificuldades para manter registros organizados e identificar quais produtos precisam ser repostos. Atualmente, depende de anotações manuais e planilhas simples, o que torna a administração demorada e sujeita a erros.

Interação com a aplicação: Maria utilizará a aplicação para monitorar o desempenho da farmácia, acessar relatórios financeiros, gerenciar pedidos a fornecedores e verificar o estoque em tempo real. Para ela, é essencial que o sistema seja simples e apresente informações de forma clara e acessível, permitindo um gerenciamento eficiente sem demandar conhecimentos técnicos avançados.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`                   | QUERO/PRECISO ... `FUNCIONALIDADE`                                         |PARA ... `MOTIVO/VALOR`                                                                                                  |
|---------------------------------------|----------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|
|João Silva (Funcionário da farmácia)   | Registrar as vendas de medicamentos no sistema de forma rápida e intuitiva | Evitar erros no controle de estoque e agilizar o atendimento ao cliente.                                                |
|João Silva (Funcionário da farmácia)   | Consultar rapidamente a disponibilidade de um medicamento no estoque       | Informar o cliente com precisão e evitar perda de tempo procurando manualmente.                                         |
|João Silva (Funcionário da farmácia)   | Receber alertas automáticos sobre produtos com estoque baixo               | Solicitar reposição a tempo e garantir que os clientes encontrem os medicamentos de que precisam.                       |
|Maria Souza (Proprietária da farmácia) | Aacessar um relatório detalhado sobre vendas e movimentação de estoque     | Monitorar o desempenho da farmácia e tomar decisões estratégicas com mais segurança.                                    |
|Maria Souza (Proprietária da farmácia) | Cadastrar e gerenciar fornecedores dentro do sistema                       | Facilitar a reposição de medicamentos e acompanhar prazos de entrega.                                                   |
|Maria Souza (Proprietária da farmácia) | Definir permissões de acesso para diferentes usuários do sistema           | Garantir que cada funcionário utilize apenas as funcionalidades necessárias para sua função.                            |
|Maria Souza (Proprietária da farmácia) | Receber notificações sobre produtos próximos do vencimento                 | Evitar desperdício e garantir que os medicamentos vendidos estejam dentro da validade.                                  |
|João Silva (Funcionário da farmácia)   | Cadastrar clientes no sistema com seus dados pessoais                      | Atender às exigências legais na venda de medicamentos controlados e garantir um registro seguro para futuras consultas. |



## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------------------------------------------|-------|
|RF-001| Permitir que o funcionário registre vendas de medicamentos.                 | ALTA  | 
|RF-002| Permitir consulta de estoque.                                               | ALTA  |
|RF-003| Emitir alertas automáticos quando um medicamento estiver com estoque baixo. | ALTA  |
|RF-004| Gerar relatórios sobre vendas e movimentação de estoque.                    | ALTA  |
|RF-005| Permitir o cadastro e gerenciamento de fornecedores.                        | MÉDIA |
|RF-006| Permitir acesso para diferentes usuários.                                   | ALTA  |
|RF-007| Gerar relatório sobre produtos próximos ao vencimento.                      | ALTA  |
|RF-008| Permitir o cadastro de clientes para a venda de medicamentos controlados.   | ALTA  |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|----------------------------------------------------------------------------------------------------------------|--------|
|RNF-001| O sistema deve ser acessível via navegador web em computadores desktop.                                        | ALTA   | 
|RNF-002| A interface do sistema deve ser intuitiva e de fácil uso para usuários com pouca familiaridade com tecnologia. | ALTA   |
|RNF-003| O banco de dados deve garantir a integridade e segurança das informações, incluindo backups periódicos.        | ALTA   |
|RNF-004| O sistema deve permitir acesso baseado em níveis de permissão para diferentes perfis de usuários.              | ALTA   |
|RNF-005| O sistema deve ser compatível com os principais navegadores modernos (Chrome, Firefox, Edge).                  | MÉDIA  |

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                                            |
|--|----------------------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre                |
|02| O projeto deve estar hospedado em um domínio aprovado pela PUC Minas |
|03| O projeto deve ser desenvolvido com banco de dados                   |
|04| Utilizar de uma ferramenta BPM para modelagem dos processos          |

