

DROP TABLE IF EXISTS `Case_Shopper_Orders`;

DROP TABLE IF EXISTS `Case_Shopper_Clients`;

DROP TABLE IF EXISTS `Case_Shopper_Products`;

CREATE TABLE `Case_Shopper_Clients` (
	  id INT NOT NULL PRIMARY KEY,
    name VARCHAR(255) unique
);

CREATE TABLE `Case_Shopper_Products` (
	id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  name VARCHAR(255),
	price FLOAT,
  qty_stock INT
);

CREATE TABLE `Case_Shopper_Orders`(
  id INT NOT NULL PRIMARY KEY,
  order_data DATE,
  delivery_date DATE,
  qty INT,
  fk_client INT,
  fk_product INT,
  FOREIGN KEY (fk_client) REFERENCES `Case_Shopper_Clients` (id),
  FOREIGN KEY (fk_product) REFERENCES `Case_Shopper_Products` (id)
);