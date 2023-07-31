

DROP TABLE IF EXISTS `Case_Shopper_Orders`;

DROP TABLE IF EXISTS `Case_Shopper_Clients`;

DROP TABLE IF EXISTS `Case_Shopper_Products`;
--------------- //  //  // ------------------

CREATE TABLE `Case_Shopper_Clients` (
	  id VARCHAR(255) NOT NULL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE `Case_Shopper_Products` (
	id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  name VARCHAR(255),
	price FLOAT,
  qty_stock INT
);

CREATE TABLE `Case_Shopper_Orders`(
  id VARCHAR(255) NOT NULL PRIMARY KEY,
  order_date VARCHAR(255) NOT NULL,
  delivery_date VARCHAR(255) NOT NULL,
  qty INT NOT NULL,
  fk_client VARCHAR(255) NOT NULL,
  fk_product INT NOT NULL,
  FOREIGN KEY (fk_client) REFERENCES `Case_Shopper_Clients` (id),
  FOREIGN KEY (fk_product) REFERENCES `Case_Shopper_Products` (id)
);

INSERT INTO `Case_Shopper_Products` VALUES
(1 , 'Tomate Italiano', 7.99 , 700),
(2, 'Couve Flor Bandeja 250G', 7.99, 500),
(3, 'Repolho Roxo Orgânico Embalagem 350G',  6.99, 300),
(4, 'Couve Kale Orgânica  150G',  6.99 , 200),
(5, 'Banana Nanica' , 7.99, 500),
(6, 'Uva Crimson 450G Bd',9.98, 600),
(7, 'Kiwi Importado 30/36',19.98, 600),
(8, 'Mamão Formosa',12.99, 760),
(9, 'Manga Palmer Kg' ,5.99, 760),
(10, 'Cranberries Pacote 70G',19.98, 600),
(11, 'Goiaba Vermelha kg',14.98, 60),
(12, 'Caju Bandeja 300G',14.90, 490),
(13, 'Ameixa Seca com Caroço 180G', 12.90, 80),
(14, 'Coco Seco Kg', 9.98, 600),
(15, 'Detergente Ypê Clear 500Ml', 1.99, 565),
(16, 'Agua Sanitaria Candura 2L', 6.49, 78),
(17, 'Limpador Perfumado Veja Aroma Sense Alegria 500Ml', 9.99, 80),
(18, 'Amaciante Downy Brisa do Verão 500Ml' , 13.99, 207),
(19, 'Batata Frita Lisa Sal e Vinagre Lays 80G ', 9.99, 29),
(20, 'Sopa de Batata com Carne Vono Ajinomoto 18G', 3.99, 80),
(21, 'Antisséptico Bucal Listerine Anticáries Zero Álcool 500Ml', 23.99,50),
(22, 'Escova Dental Colgate Classic Long Macia', 6.99,60),
(23, 'Toalha Umedecida Johnsons Baby Limpeza Suave Embalagem 44 Un', 10.99,80),
(24, 'Fanta Guaraná 350Ml', 3.99, 50),
(25, 'Molho Shoyu Satis Suave 150Ml', 4.29, 70),
(26, 'Sabonete Barra Antibactericida Carvão Detox Envoltório Protex 85G',3.29, 89),
(27, 'Desodorante Antitranspirante Rexona sem Perfume 50Ml', 11.99,208),
(28, 'Suco Del Valle 100% Laranja 1L', 9.99, 456),
(29, 'Biscoito Recheado Milkshake de Morango Oreo 90G', 3.99, 456),
(30, 'Cerveja Duplo Malte Puro Malte Br',3.99,500);

SELECT * FROM `Case_Shopper_Clients`;

SELECT * FROM `Case_Shopper_Orders`;


SELECT Case_Shopper_Orders.id,
  Case_Shopper_Products.name,
  Case_Shopper_Orders.qty,
  order_date,
  delivery_date
FROM Case_Shopper_Orders INNER JOIN Case_Shopper_Products
  ON fk_product = Case_Shopper_Products.id
WHERE fk_client = "76df2566-0b96-4021-b347-4e95ba31b6f4"
ORDER BY Case_Shopper_Orders.delivery_date;