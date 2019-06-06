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
VALUES ("thing 1", "stuff", 55, 44);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("thing 2", "stuff", 30, 120);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("cane", "walking", 25, 65);

SELECT * FROM products;