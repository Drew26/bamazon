Overview

Bamazon is an Amazon-like storefront utilizing MySQL. The app takes in orders from customers and depletes stock from the store's inventory. 


Instructions




There is a Table inside of that database called products.
The products table has each of the following columns:



id (unique id for each product)
product_name (Name of product)
department_name
price (cost to customer)
stock_quantity (how much of the product is available in stores)



Running Bamazon will first display all of the items available for sale. 
The app will prompt users with two messages.

The first will ask them the ID of the product they would like to buy.

![idPrompt](bamz1.jpg?raw=true "idPrompt")


The second message will ask how many units of the product they would like to buy.

![quantity](bamz2.jpg?raw=true "quantity")

Once the customer has placed the order, the app will check if the store has enough of the product to meet the customer's request.


If not, the app will say "Sorry! there is not enough inventory to fulfill this order. Please try again.", and then prevent the order from going through.

![notEnough](bamz3.jpg?raw=true "notEnough")

However, if your store does have enough of the product, you should fulfill the customer's order and show them the total price. 

![makePurchase](bamz4.jpg?raw=true "makePurchase")

A purchase will update the SQL database to reflect the remaining quantity.
