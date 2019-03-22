DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
item_id INT (4) NOT NULL,
product_name VARCHAR(100) NOT NULL,
department_name VARCHAR(20) NULL,
price DECIMAL(10,2),
stock_quantity INT (10),
PRIMARY KEY (item_id)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (2863, "Weave Glue", "Cosemtics", 6.99, 500);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (0987, "Mink Eyelashes", "Cosmetics", 15.99, 500);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (4586, "Mascara", "Cosmetics", 13.69, 500);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (7653, "Lip Gloss", "Cosmetics", 9.99, 500);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (6709, "Braiding Hair", "Hair & Accerssories", 18.99, 500);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (6519, "Gold Hoop Earrings", "Jewelry", 12.50, 500);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (0527, "Eye Contacts", "Cosmetics", 25.00, 100);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (8974, "Edge Control", "Hair & Accerssories", 8.99, 50);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (6725, "Du-Rag", "Hair & Accerssories", 14.75, 25);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (0678, "Boar Bristle Brush", "Hair & Accerssories", 7.99, 30);

SELECT * FROM products;