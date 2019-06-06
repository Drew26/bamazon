//require packages here
var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table");




//initialize connection to sync with mysql database

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Layla2018!",
    database: "bamazon_db"
});





//create connection with server and load product data upon successful connection
connection.connect(function(err){
    if (err){
        console.error("ERROR" + err.stack)
    }
    loadProducts();
})




//global functions


//function to load products table from database. 
//print results to console
function loadProducts(){
    //mysql query to read products in database
    connection.query("SELECT * FROM products", function(err, res){
        if (err) throw err;
        console.table(res)
    })
}

//function to prompt customer for item id
function idPrompt(){
    //use inquirer to prompt customer

    //if product exists in database then run quantity function
    //else let customer know item is not in database, then rerun loadProducts function
}

//function for quantity selection
function quantity(){
    //use inquirer to prompt customer for quantity
    //if not enough inventory then tell user and rerun loadProducts function
    //else, run makePurchase function

}


//function to make purchase
function makePurchase(){
    //run sql query to update products table
    //inform user that purchase was successful and rerun loadProducts function
}

//function check to see if product exists in database
function productAvailable(){
    //for loop in the inventory column
        //if statement to find matching product
        //return query
    //retun null
}