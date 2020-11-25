-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema calendar
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema calendar
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `calendar` DEFAULT CHARACTER SET utf8 ;
USE `calendar` ;

-- -----------------------------------------------------
-- Table `calendar`.`calendars`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `calendar`.`calendars` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(125) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `calendar`.`categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `calendar`.`categories` (
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`name`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `calendar`.`events`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `calendar`.`events` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `calendar_id` INT NULL,
  `info` VARCHAR(255) NULL,
  `start` VARCHAR(45) NULL,
  `stop` VARCHAR(45) NULL,
  `title` VARCHAR(125) NULL,
  `category` VARCHAR(45) NULL,
  `fullday` TINYINT(1) NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  INDEX `FK_category_idx` (`category` ASC) VISIBLE,
  CONSTRAINT `FK_category`
    FOREIGN KEY (`category`)
    REFERENCES `calendar`.`categories` (`name`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `calendar`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `calendar`.`users` (
  `user_name` VARCHAR(25) NOT NULL,
  `user_pass` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`user_name`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `calendar`.`user_calendars`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `calendar`.`user_calendars` (
  `user_user_name` VARCHAR(25) NOT NULL,
  `calendar_id` INT NOT NULL,
  PRIMARY KEY (`user_user_name`, `calendar_id`),
  INDEX `FK_calendars_id_idx` (`calendar_id` ASC) VISIBLE,
  CONSTRAINT `FK_calendars_id`
    FOREIGN KEY (`calendar_id`)
    REFERENCES `calendar`.`calendars` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_user_name`
    FOREIGN KEY (`user_user_name`)
    REFERENCES `calendar`.`users` (`user_name`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `calendar`.`holidays`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `calendar`.`holidays` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `date` VARCHAR(45) NULL,
  `localName` VARCHAR(45) NULL,
  `countryCode` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `calendar`.`calendar_events`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `calendar`.`calendar_events` (
  `calendar_id` INT NOT NULL,
  `event_id` INT NOT NULL,
  PRIMARY KEY (`calendar_id`, `event_id`),
  INDEX `FK_event_idx` (`event_id` ASC) VISIBLE,
  CONSTRAINT `FK_calendar`
    FOREIGN KEY (`calendar_id`)
    REFERENCES `calendar`.`calendars` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_event`
    FOREIGN KEY (`event_id`)
    REFERENCES `calendar`.`events` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `calendar`.`suntimes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `calendar`.`suntimes` (
  `date` VARCHAR(45) NOT NULL,
  `sunrise` VARCHAR(45) NULL,
  `sunset` VARCHAR(45) NULL,
  PRIMARY KEY (`date`))
ENGINE = InnoDB;

USE `calendar` ;

-- -----------------------------------------------------
-- Table `calendar`.`roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `calendar`.`roles` (
  `role_name` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`role_name`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `calendar`.`user_roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `calendar`.`user_roles` (
  `role_name` VARCHAR(20) NOT NULL,
  `user_name` VARCHAR(25) NOT NULL,
  PRIMARY KEY (`role_name`, `user_name`),
  INDEX `FK_user_roles_user_name` (`user_name` ASC) VISIBLE,
  CONSTRAINT `FK_user_roles_role_name`
    FOREIGN KEY (`role_name`)
    REFERENCES `calendar`.`roles` (`role_name`),
  CONSTRAINT `FK_user_roles_user_name`
    FOREIGN KEY (`user_name`)
    REFERENCES `calendar`.`users` (`user_name`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
