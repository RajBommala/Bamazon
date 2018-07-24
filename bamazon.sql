CREATE database bamazon;

use bamazon;

CREATE TABLE Products(
	item_id INT(10) AUTO_INCREMENT NOT NULL,
	product VARCHAR(100) NOT NULL,
	department VARCHAR(100) NOT NULL,
	price DECIMAL(10,4) NOT NULL,
	stock INT(10) NOT NULL,
	PRIMARY KEY(item_id)
);

SELECT * FROM Products;

INSERT INTO Products (
	product, department, price, stock
) VALUES
	('Fire TV stick', 'Electronics', 39.99, 100),
	('Echo Dot', 'Electronics', 49.99, 80),
	('Kindle Paperwhite e-reader', 'Electronics', 119.99, 90),
	('Cloud cam security camera', 'Electronics', 119.99, 75),
	('Fire 7 tablet', 'Electronics', 49.99, 35),
	('Echo spot-white', 'Electronics', 129.99, 100),
	('ASUS Chromebook', 'Electronics', 149.99, 65),
	('Apple TV', 'Electronics', 149.00, 25),
	('Sony DVPSR210P DVD Player', 'Electronics', 33.00, 200),
	('Echo show-Black', 'Electronics', 229.99, 350);