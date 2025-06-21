## 7. Conclusão

Este projeto conclui com a entrega de uma solução de software funcional que transforma a gestão de farmácias de pequeno porte, substituindo processos manuais e reativos por um sistema digital e integrado. A aplicação foi projetada para resolver, de forma objetiva, as ineficiências documentadas na modelagem AS-IS, como o controle de estoque em cadernos e a geração manual de relatórios.

A solução final, sustentada por uma arquitetura Cliente-Servidor moderna, atinge os seguintes resultados:

- Automação de Processos Críticos: O sistema automatiza o fluxo de vendas e o controle de estoque em tempo real (conforme o Processo 5 - Realizar Vendas), eliminando a necessidade de conferências manuais e garantindo a integridade dos dados de inventário.
- Suporte à Decisão Estratégica: A plataforma oferece à gestão uma ferramenta para tomada de decisão baseada em dados. Os Processos 7 e 8 eliminam a transcrição de anotações para planilhas, gerando relatórios financeiros e de produtos de forma instantânea e precisa.
- Gestão Integrada: O sistema centraliza a gestão de ponta a ponta. Os processos de cadastro de produtos, fornecedores e o gerenciamento de pedidos (Processos 1 a 4 e 6) operam de forma conectada, o que remove os silos de informação que existiam em cadernos e planilhas.
Dessa forma, o projeto não apenas cumpriu os requisitos acadêmicos, mas demonstrou ser uma ferramenta eficaz, com valor prático para a otimização da rotina e da capacidade estratégica do negócio.

**Principais Aprendizados**
O desenvolvimento do projeto proporcionou um aprendizado técnico e metodológico aprofundado para a equipe:

- Aplicação de Arquitetura de Software: A principal experiência prática foi a implementação de uma arquitetura Cliente-Servidor desacoplada. No backend, a criação da API RESTful com FastAPI e o uso do ORM SQLAlchemy para a camada de persistência com o MySQL foram cruciais para garantir um serviço seguro e de fácil manutenção. No frontend, a abordagem de consumir a API de forma independente reforçou o entendimento prático sobre a separação de responsabilidades (SoC).

- O Valor da Análise de Requisitos: Ficou evidente a importância da fase de análise e especificação para o sucesso do projeto. A modelagem de processos (BPM), especialmente o mapeamento do fluxo "AS-IS", nos deu a clareza necessária sobre os problemas a serem resolvidos. Essa análise serviu como base para o desenho da solução "TO-BE", guiando a criação dos protótipos de tela e do diagrama de classes de maneira lógica.

- Engenharia de Dados na Prática: Executamos o ciclo completo de modelagem de dados, desde o conceitual (Diagrama de Classes, Modelo ER) até o físico (scripts SQL). A aplicação de boas práticas, como a normalização das tabelas e a segurança no armazenamento de senhas com hash, foi um aprendizado prático essencial para a estruturação de um banco de dados de forma profissional.
