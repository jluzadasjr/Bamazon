CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
item_id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(30) NOT NULL, 
department_name VARCHAR(30) NOT NULL,
price DECIMAL(30, 2) NOT NULL, 
stock_quantity VARCHAR(30) NOT NULL,
PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES( 'Apples', 'Food', .50, 5000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES('Bananas', 'Food', .50, 5000) ;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES('Eggs', 'Food', 5, 3000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES('Shirt', 'Clothing', 15, 1000);

INSERT INTO products ( product_name, department_name, price, stock_quantity)
VALUES('Pants', 'Clothing', 50, 500);

INSERT INTO products ( product_name, department_name, price, stock_quantity)
VALUES ('Hat', 'Clothing', 20, 500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Mouse', 'Electronics', 50, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Macbook Pro', 'Electronics', 2000, 100); 

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Apple Watch', 'Electronics', 300, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('iPhone', 'Electonics', 1000, 500);


