CREATE SCHEMA `virtualschool`;
USE virtualschool;

CREATE TABLE `virtualschool`.`course` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `descript` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `virtualschool`.`subject` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `descript` VARCHAR(45) NOT NULL,
  `idCourse` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `idCourse_idx` (`idCourse` ASC) VISIBLE,
  CONSTRAINT `idCourse`
    FOREIGN KEY (`idCourse`)
    REFERENCES `virtualschool`.`course` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE `virtualschool`.`class` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `descript` VARCHAR(2000) NOT NULL,
  `idSubject` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `idSubject_idx` (`idSubject` ASC) VISIBLE,
  CONSTRAINT `idSubject`
    FOREIGN KEY (`idSubject`)
    REFERENCES `virtualschool`.`subject` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE `virtualschool`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `login` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `registration` VARCHAR(45) NOT NULL,
  `phone` VARCHAR(45) NULL,
  `email` VARCHAR(45) NOT NULL,
  `address` VARCHAR(45) NULL,
  `city` VARCHAR(45) NULL,
  `state` VARCHAR(45) NULL,
  `number` VARCHAR(45) NULL,
  `idCourse` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `registration_UNIQUE` (`registration` ASC) VISIBLE,
  UNIQUE INDEX `login_UNIQUE` (`login` ASC) VISIBLE,
  INDEX `idCourse_idx` (`idCourse` ASC) VISIBLE,
  CONSTRAINT `idCourse_user`
    FOREIGN KEY (`idCourse`)
    REFERENCES `virtualschool`.`course` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
