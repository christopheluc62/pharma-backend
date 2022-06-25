CREATE DATABASE pharma;
USE pharma;

CREATE TABLE `medication` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `expiration` DATE NOT NULL,
  PRIMARY KEY(`id`)
);

INSERT INTO medication (id,name,expiration) VALUES (1,'Advil','2023-05-10'),(2,'Doliprane','2026-08-14'),(3,'Dakin','2024-01-01'),(4,'Biafine','2025-03-12'),(5,'Bepanthen','2024-03-03'),(6,'Maxilase','2027-11-17'),(7,'Eludril','2040-06-11');