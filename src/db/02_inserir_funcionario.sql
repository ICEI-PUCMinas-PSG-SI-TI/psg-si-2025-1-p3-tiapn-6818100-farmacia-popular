INSERT INTO `sql10780869`.`funcionario` (`id`, `nome`, `cargo`, `senha`, `ativo`) VALUES
(1, 'Mariana', 'GERENTE', '$2b$12$UfK2e.1MhUJt5OMefpnFnuaUfx0t57GgpK7nA4DXP2cLIxVfYetGK', 'SIM'),
(2, 'Joao', 'EMPREGADO', '$2b$12$V3FkAFgS4ypoB1O9ofVwqONbimNpVHk8eSVPD/bOzQsChK7MoG4HO', 'SIM'),
(3, 'Larissa', 'EMPREGADO', '$2b$12$89P/lInGywSUoXd4/jqLC.j6m25znaytZnhYuyDklBT7GbOZ4J8zW', 'SIM');

ALTER TABLE `sql10780869`.`funcionario` AUTO_INCREMENT = 4;


-- | Senha Original | Hash Bcrypt                                                   |
-- | -------------- | ------------------------------------------------------------- |
-- | senh@123       | $2b$12$UfK2e.1MhUJt5OMefpnFnuaUfx0t57GgpK7nA4DXP2cLIxVfYetGK  |
-- | abc12345       | $2b$12$V3FkAFgS4ypoB1O9ofVwqONbimNpVHk8eSVPD/bOzQsChK7MoG4HO  |
-- | 1234abcd       | $2b$12$89P/lInGywSUoXd4/jqLC.j6m25znaytZnhYuyDklBT7GbOZ4J8zW  |
