## 3. Modelagem dos Processos de Negócio
### 3.1. Modelagem da situação atual (Modelagem AS IS)

* Venda de produtos: Cliente solicita o produto, o funcionário verifica pessoalmente o produto no estoque, se encontrar apresenta o preço senão encerra o processo. Se o cliente decidir pela compra, o atendente registra a venda manualmente em um caderno.
* Controle de estoque: Ao final do expediente, o funcionário da baixa nos produtos vendidos com base nos registros manuais e verifica no estoque se é preciso fazer a compra de novos produtos para evitar a falta de produtos. 
* Emitir pedido: A gerente envia os pedidos para os fornecedores e faz o acompanhamento em um caderno de registros (data, produto, quantidade, fornecedor, valor)
* Relatório de vendas: A gerente lança as anotações manuais do caderno de registros em uma planilha excel para gerar os relatórios diários, semanais, mensais, semestrais e anuais.
* Gerenciar fornecedores: A gerente cadastra os fornecedores em uma planilha excel com nome, endereço, telefone e e-mail de um representante e atualiza manualmente quando necessário.

### 3.2. Descrição geral da proposta (Modelagem TO BE)

Desenvolver uma aplicação web voltada para o gerenciamento de uma farmácia popular, unidade de bairro ou farmácia em cidade do interior, na qual há muitos processos manuais e um número reduzido de funcionários, buscando otimizar o controle de estoque, cadastro de clientes, fornecedores e de produtos. A solução será projetada para oferecer uma interface intuitiva e eficiente, permitindo a informatização de processos essenciais, como o registro de medicamentos e a emissão de relatórios financeiros. Além disso, a aplicação visa garantir conformidade com normas regulatórias do setor farmacêutico, proporcionando maior segurança e transparência na gestão dos produtos e atendimentos.

* Gerenciar Produtos
* Realizar Vendas
* Gerenciar Fornecedores
* Gerar Relatórios
* Gerenciar Pedidos de Compra
* Gerenciar Estoque
* Cadastrar Clientes

### 3.3. Modelagem dos processos

[Processo 1 - Gerenciar Produtos](./processos/cadastrar_produtos.md "Cadastrar Produtos.")

O processo se inicia com um funcionário (ou gerente) acessando o sistema e selecionando a opção "Gerenciar Produtos", em seguida escolhe a ação desejada
* Cadastrar;
* Atualizar;
* Excluir (deleção lógica);

Para atualização ou exclusão é necessário pesquisar o produto desejado.

Para cadastro ou atualização são fornecidas as informações:
* Descrição
* Tipo (comum ou medicamento)
* Laboratório (somente para medicamentos)
* Lote (somente para medicamentos)
* Data de validade
* Preço de venda
* Estoque mínimo
* Estoque máximo

O funcionário confirma a ação deseja, o sistema atualiza as informações no banco de dados, informa o status da operação e o processo é finalizado.

[Processo 2 - Realizar Vendas](./processos/realizar_vendas.md "Realizar Vendas.")

O cliente solicita um produto, o funcionário consulta a disponibilidade do item no estoque e apresenta o valor caso seja encontrado. Se o cliente optar pela compra, informa a quantidade desejada e o item é incluído no carrinho de compras. Estas atividades podem se repetir se o cliente desejar mais produtos. Em seguida o carrinho é finalizado sendo gerado um número de pedido, ou o processo termina caso o carrinho esteja vazio. O funcionário separa os produtos, o cliente informa o meio de pagamento, o funcionário seleciona a forma de pagamento no sistema, o cliente realiza o pagamento, o sistema confirmar o recebimento do pagamento, registra a venda e atualiza o estoque. O processo finaliza com os produtos sendo entregues ao cliente.

[Processo 3 - Gerenciar Fornecedores](./processos/gerenciar_fornecedores.md "Gerenciar Fornecedores.")

O funcionário (ou gerente) acessa o sistema e clica na opção "Gerenciar Fornecedores", em seguida escolhe a ação desejada na próxima tela:
* Cadastrar;
* Atualizar;
* Excluir (deleção lógica);

Para atualização ou exclusão é necessário pesquisar o produto desejado.

Para cadastro ou atualização são fornecidas as informações:
* Nome;
* E-mail;
* Telefone;
* Whatsapp;
* Endereço;

O funcionário confirma a ação deseja, o sistema atualiza as informações no banco de dados, informa o status da operação e o processo é finalizado.

[Processo 4 - Gerar Relatórios](./processos/gerar_relatorios.md "Gerar Relatórios.")

O funcionário (ou gerente) acessa o sistema e clica na opção "Relatórios", em seguida escolhe o tipo desejado na próxima tela:
* Vendas;
* Faturamento;
* Produtos com quantidade igual ou inferior à quantidade mínima;
* Produtos a vencer;

Para os relatórios de "Vendas" e "Faturamento" pode ser escolhido um período. Caso não seja informado, será considerado a data atual. Em seguida o empregado deve confirmar a ação desejada, o sistema pesquisa as informações no banco de dados, gera o relatório e exibe na tela e o processo é finalizado.


