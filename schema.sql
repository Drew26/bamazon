DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
  
  id INTEGER AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(30),
  department_name VARCHAR(30),
  price INTEGER(10),
  stock_quantity INTEGER(10),
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("mug", "kitchen", 55, 44);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("rug", "living room", 30, 120);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("cane", "walking", 70, 12);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("umbrella", "travel", 15, 310);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("shirt", "clothing", 25, 25);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("remote control", "entertainment", 25, 75);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("running shoes", "athletic wear", 125, 60);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("protein", "fitness", 25, 40);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("tool set", "home improvement", 100, 200);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("watch", "jewelry", 200, 70);

SELECT * FROM products;