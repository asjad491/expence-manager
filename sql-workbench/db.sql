-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: expensedb
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `expenses`
--

DROP TABLE IF EXISTS `expenses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `expenses` (
  `expense_id` int NOT NULL AUTO_INCREMENT,
  `expensename` varchar(255) NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `date` date NOT NULL,
  `filename` varchar(255) NOT NULL,
  PRIMARY KEY (`expense_id`)
) ENGINE=InnoDB AUTO_INCREMENT=80 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `expenses`
--

LOCK TABLES `expenses` WRITE;
/*!40000 ALTER TABLE `expenses` DISABLE KEYS */;
INSERT INTO `expenses` VALUES (1,'food',400.00,'2024-03-06','sas'),(2,'hair',388.00,'2024-03-18','sas'),(3,'car',500.00,'2024-03-08','sas'),(4,'bills',300.00,'2024-03-06','sas'),(5,'rashon',288.00,'2024-03-18','sas'),(6,'water',100.00,'2024-03-08','sas'),(7,'internet',420.00,'2024-03-06','sas'),(8,'gas',385.00,'2024-03-18','sas'),(9,'petrol',540.00,'2024-03-08','sas'),(10,'toothpaste',420.00,'2024-03-06','sas'),(11,'grocerry',760.00,'2024-03-18','sas'),(12,'milk',50.00,'2024-03-08','sas'),(13,'fruits',900.00,'2024-03-06','sas'),(14,'vegitables',30.00,'2024-03-18','sas'),(15,'meat',51.00,'2024-03-08','sas'),(16,'asjad',500.00,'2024-03-04','record1'),(17,'asjad22',600.00,'2024-03-08','record1'),(18,'mushat',450.00,'2024-03-26','record1'),(19,'food',2000.00,'2024-02-29','marchexpences'),(20,'rent',12000.00,'2024-02-28','marchexpences'),(21,'haircut',400.00,'2024-02-29','marchexpences'),(22,'grocerry',2500.00,'2024-03-02','marchexpences'),(23,'bill',5500.00,'2024-03-13','marchexpences'),(24,'asjad',500.00,'2024-03-04','work'),(25,'asjad22',600.00,'2024-03-08','work'),(26,'mushat',450.00,'2024-03-26','work'),(27,'food',400.00,'2024-03-06','mg'),(28,'hair',388.00,'2024-03-18','mg'),(29,'car',500.00,'2024-03-08','mg'),(30,'bills',300.00,'2024-03-06','mg'),(31,'dssf',28.00,'2024-03-18','mg'),(32,'asjad',500.00,'2024-03-04','april'),(33,'asjad22',600.00,'2024-03-08','april'),(34,'mushat',450.00,'2024-03-26','april'),(35,'asjad',500.00,'2024-03-04','may'),(36,'asjad22',600.00,'2024-03-08','may'),(37,'mushat',450.00,'2024-03-26','may'),(38,'food',400.00,'2024-03-06','may2'),(39,'hair',388.00,'2024-03-18','may2'),(40,'car',500.00,'2024-03-08','may2'),(41,'water',100.00,'2024-03-08','may2'),(42,'internet',420.00,'2024-03-06','may2'),(43,'meat',51.00,'2024-03-08','may2'),(44,'food',400.00,'2024-03-06','hello'),(45,'hair',388.00,'2024-03-18','hello'),(46,'asjad',500.00,'2024-03-04','hello22'),(47,'asjad22',600.00,'2024-03-08','hello22'),(48,'mushat',450.00,'2024-03-26','hello22'),(49,'ss',22.00,'2024-03-18','geto'),(50,'getori',2222.00,'2024-03-01','getor'),(51,'xxx',111.00,'2024-03-08','jol'),(52,'asjad',500.00,'2024-03-04','fell'),(53,'asjad22',600.00,'2024-03-08','fell'),(54,'mushat',450.00,'2024-03-26','fell'),(55,'asjad',500.00,'2024-03-04','fell'),(56,'asjad22',600.00,'2024-03-08','fell'),(57,'mushat',450.00,'2024-03-26','fell'),(58,'asjad',500.00,'2024-03-04','der'),(59,'asjad22',600.00,'2024-03-08','der'),(60,'mushat',450.00,'2024-03-26','der'),(61,'food',400.00,'2024-03-06','january'),(62,'hair',388.00,'2024-03-18','january'),(63,'car',500.00,'2024-03-08','january'),(64,'bills',300.00,'2024-03-06','january'),(65,'rashon',288.00,'2024-03-18','january'),(66,'meat',51.00,'2024-03-08','gramer'),(67,'car',500.00,'2024-03-08','helt'),(68,'petrol',540.00,'2024-03-08','helt'),(69,'toothpaste',420.00,'2024-03-06','helt'),(70,'grocerry',760.00,'2024-03-18','helt'),(71,'milk',50.00,'2024-03-08','helt'),(72,'fruits',900.00,'2024-03-06','helt'),(73,'food',300.00,'2024-03-18','helt'),(74,'meat',51.00,'2024-03-08','helt'),(75,'food',550.00,'2024-03-12','march data'),(76,'milk',500.00,'2024-03-21','march data'),(77,'bills',9000.00,'2024-03-26','march data'),(78,'car',4000.00,'2024-04-03','march data'),(79,'rent',13000.00,'2024-03-12','march data');
/*!40000 ALTER TABLE `expenses` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-19  1:38:57
