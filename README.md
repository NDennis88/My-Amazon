# My-Amazon


## Description
This application presents the customer interface using a command line based storefront using npm inquirer package and the MySQL database backend together with the npm mysql package. 


## MySql Database 
To run this application, you need to install the MySQL database on your device. If you do not have this application installed, view the package.json page to install the version you need for your operating system. Once MySQL is intalled, you can create the Bamazon database and the products table with the SQL code found in schema.sql. Run this code inside your MySQL Workbench to populate the database, then you will be ready to proceed with running the Bamazon customer interface.

## Customer Interface
The customer interface allows the user to view the current inventory of store items: item IDs, product name and price. The user is then able to purchase one of the existing items by entering the item ID and the quantity wanted. If the item quantity is in stock, the user's order will be fulfilled. The total purchase price is then displayed and the product quantity will be updated in the store's database. If the desired quantity is not available, the user will be informed that the product is not in stock.

## Sample View

![My Amazon Screenshot](/assets/images/screenshot.png/)


## Technology

+ Node
+ MySql
+ Inquirer



