//require packages here
var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table");




//initialize connection to sync with mysql database

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon_db"
});





//create connection with server and load product data upon successful connection
connection.connect(function (err) {
    if (err) {
        console.error("ERROR" + err.stack)
    }
    loadProducts();
})




//global functions


//function to load products table from database. 
//print results to console
function loadProducts() {
    //mysql query to read products in database
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.table(res)
        idPrompt(res);
    })

}

//function to prompt customer for item id
function idPrompt(res) {
    //use inquirer to prompt customer
    inquirer
        .prompt({
            name: "productID",
            type: "input",
            message: "Please enter the ID number of the product you would like to purchase.",
            validate: function (value) {
                if (isNaN(value) === false) {
                    return true;
                }
                return false;
            }
        }).then(function (value) {
            var choiceID = parseInt(value.productID)
            //console.log(choiceID)
            var product = productAvailable(choiceID, res)
            //console.log(product)
            if (product) {
                //if product exists in database then run quantity function
                console.log("Product available!")
                quantity(product);
            }
            //else let customer know item is not in database, then rerun loadProducts function
            else {
                console.log("Product Not Found");
                loadProducts();
            }
        });
}

//function for quantity selection
function quantity(product) {
    //use inquirer to prompt customer for quantity
    inquirer
        .prompt({
            name: "quantity",
            type: "input",
            message: "How many would you like to purchase?",
            validate: function (value) {
                if (isNaN(value) === false) {
                    return true;
                }
                return false;
            }
        }).then(function (value) {
            //create var with parseInt to minimize bugs
            if (value.quantity > product.stock_quantity) {
                //if not enough inventory then tell user and rerun loadProducts function
                console.log("Sorry! there is not enough inventory to fulfill this order. Please try again.");
                //else, run makePurchase function
                loadProducts();
            }
            else {
                makePurchase();
            }
        });
}

//function to update database
// function updateTable(value, productID) {
//     if (value.quantity = productID.stock_quantity) {
//         var totalCost = productID.price * quantity;
//         console.log("The total cost for " + quantity + " " + productID.product_name + " is " + totalCost + " Thank you!");
//         connection.query("UPDATE products SET stock_quantity = stock_quantity - " + quantity + "WHERE item_id = " + productID);
//     }
// }

//function to make purchase
function makePurchase() {
    //run sql query to update products table. Find out how to update query

    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.table(res);
        //inform user that purchase was successful and rerun loadProducts function
        console.log("Your purchase was successful! Thanks for shopping!");
        
        // 	updateMySql();
        
    })
}

//function check to see if product exists in database
function productAvailable(choiceID, res) {
    //for loop in the inventory column
    for (var i = 0; i < res.length; i++) {
        //if product name equals to one of the selections then returns true for purchase
        if (res[i].id === choiceID) {
            return res[i];
        }
    }
    return null
}

