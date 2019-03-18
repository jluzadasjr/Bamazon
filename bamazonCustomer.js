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
  console.log("connection success");
  // run the makeTable function after the connection is made to prompt the user
  makeTable();
});

// function which prompts the user for what action they should take
var makeTable = function () {
  connection.query("SELECT * FROM products", function (err, result) {
    // console.log(result)
    for (var i = 0; i < result.length; i++) {
      console.log(result[i].item_id + " || " + result[i].product_name + " || " +
        result[i].department_name + " || " + result[i].price + " || " +
        result[i].stock_quantity + "\n");
    }
    customerPrompt();
  });
}

// function that prompts user on what item they'd like to buy and how many
var customerPrompt = function(res) {
  console.log(customerPrompt);
  inquirer.prompt([{
      name: "item",
      type: "input",
      message: "What item would you like to buy?"
    }]).then(function (answer) {
      console.log(answer)
      var correct = false;
      for (var i = 0; i < res; i++) {
        if (res[i].product_name == answer.choice) {
          correct = true;
          var product = answer.choice;
          var id = i;
          inquirer.
            prompt({
              name: "quantity",
              type: "input",
              message: "How many units would you like to buy?",
              validate: function (value) {
                if (isNaN(value) === false) {
                  return true;
                } else {
                  return false;
                }
              }
            }).then(function (answer) {
              if ((res[id].stock_quantity - answer.quantity) > 0) {
                connection.query("UPDATE products SET stock_quatity=' "
                  + (res[id].stock_quantity - answer.quantity) + " ' WHERE product_name= ' "
                  + product + " ' ", function (err, res2) {
                    console.log("Product Purchased!");
                    makeTable();
                  })
              } else
                console.log("Not a valid selection!");
              customerPrompt();
            })
        }
      }
      // when customer makes wrong choice, the "Not a valid choice" message will show up.  
      if (i == res && correct == false) {
        console.log("Not a valid choice!");
        customerPrompt();
      }
    })
};