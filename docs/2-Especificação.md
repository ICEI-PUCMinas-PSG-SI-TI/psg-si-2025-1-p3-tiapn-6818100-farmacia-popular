# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="01-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

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

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|João Silva (Funcionário da farmácia)  | Registrar as vendas de medicamentos no sistema de forma rápida e intuitiva           | Evitar erros no controle de estoque e agilizar o atendimento ao cliente.               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.



## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA | 
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |

Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.
