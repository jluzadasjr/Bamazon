var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // My port
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazon_DB"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
  if (err) throw err;
  console.log("connection");
  // run the start function after the connection is made to prompt the user
  start();
});

// function which prompts the user for what action they should take
function start() {
  // connection.query("SELECT * FROM products", function (err, result) {
  //   if (err) throw err;
  //   console.table(result);
  // }); buy()
  getProducts()
  buy()
}
function getProducts() {
  connection.query("SELECT * FROM products", function (err, result) {
    if (err) throw err;
    console.table(result);
  });
}

function buy() {
  inquirer.prompt([
    {
      name: "item",
      type: "input",
      message: "What item would you like to buy?"
    },
    {
      name: "quantity",
      type: "input",
      message: "How many units would you like to buy?",
      validate: function (value) {
        if (isNaN(value) === false) {
          return true;
        }
        return false;
      }
    }
  ]).then(function (newQuantity) {
    if ((result[id].stock_quantity - newQuantity.quantity) > 0) {
      connection.query('UPDATE products SET ? stock_quatity=' 
      +(result[id].stock_quantity-answer.quantity)+
      "(result[id).stock_quantity-answer.quantity)+' WHERE product_name=' " + product
        + "'", function (err, res2) {
          console.log("Product Purchased!");
          getProducts()
        })
    } else {
      console.log("Not a valid selection!");
      buy(result);
    }
  })
    .then(function (answer) {
      connection.query(
        "SELECT * FROM products WHERE item_id = ?",
        [
          answer.item
        ],

        function (err, result) {
          if (err) throw err;
          if (result[0].stock_quantity < answer.quantity) {
            console.log("Insufficient Quantity!");
          } else {
            connection.query("UPDATE products SET ? WHERE ?",
              [
                {
                  stock_quantity: answer.quantity
                },

                {
                  id: answer.id
                }
              ],
              function (error) {
                if (error) throw err;
                console.log("Purchase complete");
                start();
              }
            );
          }
          console.log(JSON.stringify(result));
          console.log(typeof result[0].stock_quantity);
          console.table(result);
        }
      )
      return console.log(answer.item);
    })
  }