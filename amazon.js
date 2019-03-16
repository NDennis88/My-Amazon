var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Minnie1988",
  database: "bamazon_db"
});

connection.connect(function(err) {
    if (err) throw err;
    itemSearch();
  });
  
  function itemSearch() {
    connection.query("SELECT item_id, product_name, price FROM products", function(err,res){
        if(err) throw err;
        console.table(res);
    inquirer
      .prompt({
        name: "item_id",
        type: "input",
        message: "What is the item id for the product you would like to search for?"
      })
      .then(function(answer) {
        //   console.log(answer)
        var query = "SELECT item_id, product_name, price FROM products WHERE ?";
        connection.query(query, { item_id: answer.item_id }, function(err, res) {
          console.table(res);
          askQuantity(answer.item_id);
        //   runSearch();
        });
      })
    });
  }

  function askQuantity(item_id){
    inquirer.prompt({
        name: "product_quantity",
        type: "input",
        message: "How many units of product would you like to order?"
    }).then(function (user) {
      connection.query("SELECT stock_quantity, price FROM products WHERE ?", { item_id: parseInt(item_id) }, function (err, res) {
         if (err) throw err;
         for (var i = 0; i < res.length; i++) {

         }
           var currentStock = res[0].stock_quantity;
           var price = res[0].price;
          //  console.log(currentStock);
           if (user.product_quantity > currentStock) {
             console.log("Apologies! We're currently out of stock.");
             // askQuantity();
             itemSearch();
           } else {
             console.log("We got your back like chiropractic! Your items have been successfully ordered");
            //  console.log("Quantity: " + currentStock - user.quantity);
             // console.log("----------------");
             updatedQuanity= parseInt(currentStock) - parseInt(user.product_quantity)
            //  console.log("below should be 47")
             console.log(updatedQuanity);
             connection.query("UPDATE products SET stock_quantity = ? WHERE item_id = ?", [updatedQuanity, item_id ], function (err, res) {
                 console.log("updated");
              console.log("Your total is: $" + user.product_quantity * price);
              connection.end();
             })
        }
    });
  })
}