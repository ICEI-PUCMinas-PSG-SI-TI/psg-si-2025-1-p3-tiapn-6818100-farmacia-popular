-- -----------------------------------------------------
-- Schema farmacia
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `farmacia` DEFAULT CHARACTER SET utf8 ;
USE `farmacia` ;

-- -----------------------------------------------------
-- Table `farmacia`.`produto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `farmacia`.`produto` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `descricao` VARCHAR(80) NOT NULL,
  `preco` DECIMAL(8,2) NOT NULL,
  `quantidade` INT NOT NULL,
  `validade` DATE NOT NULL,
  `lote` VARCHAR(45) NULL,
  `laboratorio` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));


-- -----------------------------------------------------
-- Table `farmacia`.`funcionario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `farmacia`.`funcionario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(80) NOT NULL,
  `cargo` ENUM("GERENTE", "EMPREGADO") NOT NULL,
  `senha` VARCHAR(60) NOT NULL,
  `ativo` ENUM("SIM", "NAO") NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `nome_UNIQUE` (`nome` ASC));


-- -----------------------------------------------------
-- Table `farmacia`.`pedido_venda`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `farmacia`.`pedido_venda` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `data` DATETIME NOT NULL,
  `id_funcionario` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_matricula_funcionario_idx` (`id_funcionario` ASC),
  CONSTRAINT `fk_pedido_venda_1`
    FOREIGN KEY (`id_funcionario`)
    REFERENCES `farmacia`.`funcionario` (`id`)
    ON DELETE RESTRICT
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `farmacia`.`item_venda`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `farmacia`.`item_venda` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_pedido_venda` INT NOT NULL,
  `id_produto` INT NOT NULL,
  `numero_item` INT NOT NULL,
  `quantidade` INT NOT NULL,
  `preco` DECIMAL(8,2) NOT NULL,
  INDEX `numero_pedido_idx` (`id_pedido_venda` ASC),
  PRIMARY KEY (`id`),
  INDEX `fk_item_venda_2_idx` (`id_produto` ASC),
  CONSTRAINT `fk_item_venda_1`
    FOREIGN KEY (`id_pedido_venda`)
    REFERENCES `farmacia`.`pedido_venda` (`id`)
    ON DELETE RESTRICT
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_item_venda_2`
    FOREIGN KEY (`id_produto`)
    REFERENCES `farmacia`.`produto` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
