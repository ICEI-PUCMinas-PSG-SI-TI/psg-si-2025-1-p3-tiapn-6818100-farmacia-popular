-- -----------------------------------------------------
-- Schema sql10780869
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `sql10780869` DEFAULT CHARACTER SET utf8 ;
USE `sql10780869` ;

-- -----------------------------------------------------
-- Table `sql10780869`.`produto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sql10780869`.`produto` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `descricao` VARCHAR(80) NOT NULL,
  `preco` DECIMAL(8,2) NOT NULL,
  `quantidade` INT NOT NULL,
  `validade` DATE NOT NULL,
  `lote` VARCHAR(45) NULL,
  `laboratorio` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));


-- -----------------------------------------------------
-- Table `sql10780869`.`funcionario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sql10780869`.`funcionario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(80) NOT NULL,
  `cargo` ENUM("GERENTE", "EMPREGADO") NOT NULL,
  `senha` VARCHAR(60) NOT NULL,
  `ativo` ENUM("SIM", "NAO") NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `nome_UNIQUE` (`nome` ASC));


-- -----------------------------------------------------
-- Table `sql10780869`.`pedido_venda`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sql10780869`.`pedido_venda` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `data` DATETIME NOT NULL,
  `id_funcionario` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_matricula_funcionario_idx` (`id_funcionario` ASC),
  CONSTRAINT `fk_pedido_venda_1`
    FOREIGN KEY (`id_funcionario`)
    REFERENCES `sql10780869`.`funcionario` (`id`)
    ON DELETE RESTRICT
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `sql10780869`.`item_venda`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sql10780869`.`item_venda` (
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
    REFERENCES `sql10780869`.`pedido_venda` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_item_venda_2`
    FOREIGN KEY (`id_produto`)
    REFERENCES `sql10780869`.`produto` (`id`)
    ON DELETE RESTRICT
    ON UPDATE NO ACTION);
