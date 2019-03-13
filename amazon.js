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
    connection.query("SELECT * FROM products", function(err,res){
        if(err) throw err;
        console.table(res);
    inquirer
      .prompt({
        name: "item_id",
        type: "input",
        message: "What is the item id for the product you would like to search for?"
      })
      .then(function(answer) {
          console.log(answer)
        var query = "SELECT item_id, product_name, price, stock_quantity FROM products WHERE ?";
        connection.query(query, { item_id: answer.item_id }, function(err, res) {
          console.table(res);
          askQuantity();
          runSearch();
        });
      });
    });
  }

  function askQuantity(){
      inquirer
        .prompt({
            name: "product_quantity",
            type: "input",
            message: "How many units of product would you like to order?"
        })
        .then(function(answer){
            console.log(answer)
        // var query = 
        })
  }