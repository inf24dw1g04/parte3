-- MySQL dump 10.13  Distrib 9.2.0, for Linux (x86_64)
--
-- Host: localhost    Database: sistema_gestao
-- ------------------------------------------------------
-- Server version	9.2.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Event`
--
CREATE DATABASE IF NOT EXISTS sistema_gestao;
use sistema_gestao;
#INSERT INTO logs (message) VALUES ('executado com sucesso');
DROP TABLE IF EXISTS `Event`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Event` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(512) NOT NULL,
  `description` varchar(512) NOT NULL,
  `date` varchar(512) NOT NULL,
  `time` varchar(512) NOT NULL,
  `location` varchar(512) NOT NULL,
  `organizerId` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Event`
--

LOCK TABLES `Event` WRITE;
/*!40000 ALTER TABLE `Event` DISABLE KEYS */;
INSERT INTO `Event` VALUES (1,'Festival de Música Lisboa','Um evento com artistas renomados em Lisboa.','2024-12-01','10:00:00','Lisboa - Praça do Comércio',1),(2,'Gastronomia do Porto','Festival de gastronomia com os melhores chefs do Porto.','2024-12-02','11:00:00','Porto - Palácio da Bolsa',2),(3,'Celebração Tradicional Braga','Celebração da cultura tradicional portuguesa em Braga.','2024-12-03','12:00:00','Braga - Centro Histórico',3),(4,'Exposição Arte Aveiro','Exposição de arte contemporânea em Aveiro.','2024-12-04','13:00:00','Aveiro - Museu de Arte',4),(5,'Mega Show Coimbra','Show com performances artísticas diversificadas.','2024-12-05','14:00:00','Coimbra - Praça 8 de Maio',5),(6,'Show ao Ar Livre Faro','Evento ao ar livre com música e entretenimento.','2024-12-06','15:00:00','Faro - Jardim Manuel Bívar',6),(7,'Noite de Gala Évora','Um evento de gala para convidados especiais.','2024-12-07','16:00:00','Évora - Teatro Garcia de Resende',7),(8,'Cerimônia Cultural Madeira','Celebração cultural da região da Madeira.','2024-12-08','17:00:00','Funchal - Avenida Arriaga',8),(9,'Festival Açores','Uma celebração das tradições e cultura açoriana.','2024-12-09','18:00:00','Ponta Delgada - Largo da Matriz',9),(10,'Conferência de Negócios Algarve','Discussões e networking para líderes empresariais.','2024-12-10','19:00:00','Algarve - Hotel Tivoli',10),(11,'Evento Luxo Lisboa','Um evento exclusivo de luxo em Lisboa.','2024-12-11','10:30:00','Lisboa - Hotel Ritz',11),(12,'Festival Universitário Porto','Celebração acadêmica para estudantes universitários.','2024-12-12','11:30:00','Porto - Praça Gomes Teixeira',12),(13,'Noite Cultural Braga','Evento cultural com apresentações e exposições.','2024-12-13','12:30:00','Braga - Palácio do Raio',13),(14,'Casamento dos Sonhos','Celebração única de um casamento inesquecível.','2024-12-14','13:30:00','Faro - Forte de São Brás',14),(15,'Show Itinerante','Espetáculo que percorre diversas cidades.','2024-12-15','14:30:00','Coimbra - Largo da Portagem',15),(16,'Festa Regional Alentejo','Tradições e cultura do Alentejo reunidas.','2024-12-16','15:30:00','Évora - Praça do Giraldo',16),(17,'Convenção Internacional Lisboa','Evento internacional com líderes mundiais.','2024-12-17','16:30:00','Lisboa - Centro de Congressos',17),(18,'Cultura Tradicional Açores','Celebração das raízes culturais açorianas.','2024-12-18','17:30:00','Angra do Heroísmo - Praça Velha',18),(19,'Feira de Tecnologia Algarve','Apresentação de inovações tecnológicas.','2024-12-19','18:30:00','Vilamoura - Marina',19),(20,'Evento Empresarial Coimbra','Discussões sobre crescimento empresarial.','2024-12-20','19:30:00','Coimbra - Convento São Francisco',20),(21,'Lançamento de Produto Porto','Apresentação de novos produtos e serviços.','2024-12-21','10:00:00','Porto - Terminal de Cruzeiros',21),(22,'Feira de Artesanato Braga','Mostra do melhor do artesanato regional.','2024-12-22','11:00:00','Braga - Mercado Cultural',22),(23,'Concertos ao Vivo','Música ao vivo com grandes bandas nacionais.','2024-12-23','12:00:00','Évora - Arena d’Évora',23),(24,'Esporte e Aventura Faro','Evento de atividades esportivas e aventura.','2024-12-24','13:00:00','Faro - Parque Natural Ria Formosa',24),(25,'Semana Acadêmica Lisboa','Encontro de estudantes e professores.','2024-12-25','14:00:00','Lisboa - Campus Universitário',25),(26,'Feira Gastronômica Porto','O melhor da gastronomia portuguesa.','2024-12-26','15:00:00','Porto - Alfândega do Porto',26),(27,'Evento Temático Açores','Uma experiência temática única.','2024-12-27','16:00:00','Pico - Auditório Municipal',27),(28,'Festival de Verão Algarve','Música, comida e diversão no verão.','2024-12-28','17:00:00','Albufeira - Praia dos Pescadores',28),(29,'Noite de Gala Lisboa','Evento de gala com convidados de destaque.','2024-12-29','18:00:00','Lisboa - Fundação Calouste Gulbenkian',29),(30,'Conferência de Startups Braga','Conferência com empreendedores e startups.','2024-12-30','19:00:00','Braga - Altice Forum',30);
/*!40000 ALTER TABLE `Event` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Organizer`
--

DROP TABLE IF EXISTS `Organizer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Organizer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(512) NOT NULL,
  `email` varchar(512) NOT NULL,
  `phone` varchar(512) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Organizer`
--

LOCK TABLES `Organizer` WRITE;
/*!40000 ALTER TABLE `Organizer` DISABLE KEYS */;
INSERT INTO `Organizer` VALUES (1,'Festivais Lisboa','festivais.lisboa@example.com','+351910000001'),(2,'events Porto','events.porto@example.com','+351910000002'),(3,'Celebrações Braga','celebracoes.braga@example.com','+351910000003'),(4,'organizers Aveiro','organizers.aveiro@example.com','+351910000004'),(5,'Megaevents Coimbra','megaevents.coimbra@example.com','+351910000005'),(6,'ShowTime Faro','showtime.faro@example.com','+351910000006'),(7,'Gala Évora','gala.evora@example.com','+351910000007'),(8,'Cerimônias Madeira','cerimonias.madeira@example.com','+351910000008'),(9,'Festas Açores','festas.acores@example.com','+351910000009'),(10,'Conferências Algarve','conferencias.algarve@example.com','+351910000010'),(11,'events Luxo Lisboa','luxo.lisboa@example.com','+351910000011'),(12,'Festival Universitário','universitario.festival@example.com','+351910000012'),(13,'Noite Cultural Porto','noite.cultural@example.com','+351910000013'),(14,'Casamentos Braga','casamentos.braga@example.com','+351910000014'),(15,'Empresarial Faro','empresarial.faro@example.com','+351910000015'),(16,'Shows Itinerantes','shows.itinerantes@example.com','+351910000016'),(17,'Festas Regionais','festas.regionais@example.com','+351910000017'),(18,'Conferências Globais','conferencias.globais@example.com','+351910000018'),(19,'events Corporativos','corporativos.events@example.com','+351910000019'),(20,'Aniversários Personalizados','aniversarios.personalizados@example.com','+351910000020'),(21,'Convenções Internacionais','convencoes.internacionais@example.com','+351910000021'),(22,'ShowBiz Coimbra','showbiz.coimbra@example.com','+351910000022'),(23,'Cultura Tradicional','cultura.tradicional@example.com','+351910000023'),(24,'events ao Ar Livre','events.arlivre@example.com','+351910000024'),(25,'Festas Privadas Porto','festas.privadas@example.com','+351910000025'),(26,'Concertos Algarve','concertos.algarve@example.com','+351910000026'),(27,'Esportes Évora','esportes.evora@example.com','+351910000027'),(28,'Lançamentos Faro','lancamentos.faro@example.com','+351910000028'),(29,'Semana Acadêmica','semana.academica@example.com','+351910000029'),(30,'Feiras Empresariais','feiras.empresariais@example.com','+351910000030'),(31,'Gui','gui123@gmail.com','31 99493342');
/*!40000 ALTER TABLE `Organizer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Partricipant`
--

DROP TABLE IF EXISTS `Partricipant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Partricipant` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(512) NOT NULL,
  `email` varchar(512) NOT NULL,
  `status` varchar(512) NOT NULL,
  `ticketId` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Partricipant`
--

LOCK TABLES `Partricipant` WRITE;
/*!40000 ALTER TABLE `Partricipant` DISABLE KEYS */;
INSERT INTO `Partricipant` VALUES (1,'João Silva','joao.silva@example.com','confirmado',1),(2,'Maria Oliveira','maria.oliveira@example.com','pendente',2),(3,'Carlos Santos','carlos.santos@example.com','confirmado',3),(4,'Ana Costa','ana.costa@example.com','pendente',4),(5,'Pedro Almeida','pedro.almeida@example.com','confirmado',5),(6,'Sara Martins','sara.martins@example.com','pendente',6),(7,'Luis Ferreira','luis.ferreira@example.com','confirmado',7),(8,'Rita Neves','rita.neves@example.com','pendente',8),(9,'Tiago Gonçalves','tiago.goncalves@example.com','confirmado',9),(10,'Cláudia Nascimento','claudia.nascimento@example.com','pendente',10),(11,'Ricardo Lopes','ricardo.lopes@example.com','confirmado',11),(12,'Beatriz Pinto','beatriz.pinto@example.com','pendente',12),(13,'Fábio Ramos','fabio.ramos@example.com','confirmado',13),(14,'Inês Rocha','ines.rocha@example.com','pendente',14),(15,'Hugo Lima','hugo.lima@example.com','confirmado',15),(16,'Patrícia Mendes','patricia.mendes@example.com','pendente',16),(17,'André Sousa','andre.sousa@example.com','confirmado',17),(18,'Marta Dias','marta.dias@example.com','pendente',18),(19,'Diogo Barbosa','diogo.barbosa@example.com','confirmado',19),(20,'Vanessa Monteiro','vanessa.monteiro@example.com','pendente',20),(21,'Rodrigo Faria','rodrigo.faria@example.com','confirmado',21),(22,'Sofia Correia','sofia.correia@example.com','pendente',22),(23,'Gustavo Cardoso','gustavo.cardoso@example.com','confirmado',23),(24,'Laura Ribeiro','laura.ribeiro@example.com','pendente',24),(25,'Henrique Cunha','henrique.cunha@example.com','confirmado',25),(26,'Camila Pires','camila.pires@example.com','pendente',26),(27,'Marcelo Teixeira','marcelo.teixeira@example.com','confirmado',27),(28,'Helena Carvalho','helena.carvalho@example.com','pendente',28),(29,'Victor Batista','victor.batista@example.com','confirmado',29),(30,'Juliana Vieira','juliana.vieira@example.com','pendente',30);
/*!40000 ALTER TABLE `Partricipant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Ticket`
--

DROP TABLE IF EXISTS `Ticket`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Ticket` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type_ticket` varchar(512) NOT NULL,
  `price` int NOT NULL,
  `eventId` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Ticket`
--

LOCK TABLES `Ticket` WRITE;
/*!40000 ALTER TABLE `Ticket` DISABLE KEYS */;
INSERT INTO `Ticket` VALUES (1,'normal',20,1),(2,'normal',20,1),(3,'normal',20,1),(4,'VIP',50,1),(5,'VIP',50,1),(6,'premium',75,1),(7,'normal',30,2),(8,'normal',30,2),(9,'normal',30,2),(10,'VIP',80,2),(11,'VIP',80,2),(12,'premium',100,2),(13,'normal',25,3),(14,'normal',25,3),(15,'normal',25,3),(16,'VIP',60,3),(17,'VIP',60,3),(18,'premium',90,3),(19,'normal',40,4),(20,'normal',40,4),(21,'normal',40,4),(22,'VIP',90,4),(23,'VIP',90,4),(24,'premium',120,4),(25,'normal',35,5),(26,'normal',35,5),(27,'normal',35,5),(28,'VIP',70,5),(29,'VIP',70,5),(30,'premium',95,5),(31,'normal',22,6),(32,'normal',22,6),(33,'normal',22,6),(34,'VIP',55,6),(35,'VIP',55,6),(36,'premium',75,6),(37,'normal',32,7),(38,'normal',32,7),(39,'normal',32,7),(40,'VIP',85,7),(41,'VIP',85,7),(42,'premium',110,7),(43,'normal',27,8),(44,'normal',27,8),(45,'normal',27,8),(46,'VIP',62,8),(47,'VIP',62,8),(48,'premium',88,8),(49,'normal',42,9),(50,'normal',42,9),(51,'normal',42,9),(52,'VIP',95,9),(53,'VIP',95,9),(54,'premium',120,9),(55,'normal',37,10),(56,'normal',37,10),(57,'normal',37,10),(58,'VIP',75,10),(59,'VIP',75,10),(60,'premium',105,10),(61,'string',0,5);
/*!40000 ALTER TABLE `Ticket` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-01-26  3:33:55
