//NPM packages
var mysql = require("mysql");
var inquirer = require("inquirer");

//connecting to SQL database
var connection = mysql.createConnection({
	host: "localhost",
	port: 8889,
	user: "root",
	password: "root",
	database: "bamazon"
});

//display list of products in CLI
function displayProducts(){
	connection.query("SELECT * FROM Products", function(err, data){
		if(err) throw err;
		console.log("---------- Welcome to BAMAZON ----------");
		console.log("--------------------------------------------------------------------------------------------------");
		for(var i= 0; i < data.length; i++){
			console.log("Item ID: " + data[i].item_id + " | " + "Product Name: " + data[i].product + " | " + "Department Name: " + data[i].department + " | " + "Price: " + data[i].price + " | " + "Stock Quantity: " + data[i].stock);
			console.log("--------------------------------------------------------------------------------------------------");
		}
		userToBuy();
	});
};

//Ask questions to user
function userToBuy(){
	inquirer.prompt([{
		type: "input",
		name: "id",
		message: "Enter product ID to buy?"
	},
	{
		type: "input",
		name: "units",
		message: "How many units of the product you would like to buy?"
	}]).then(function(answer){
		var buyid = answer.id;
		var quantity = answer.units;
		totalProduct(buyid, quantity)
	});
};

//check to see if database has enough of the product to meet the customer's request.
function totalProduct(id, quntityStocks){
	connection.query("SELECT * FROM Products WHERE item_id = " + id, function(err, data){
		if (err) throw err;

		if (quntityStocks <= data[0].stock){
			var totals = data[0].price * quntityStocks;
			console.log("Your total for " + quntityStocks + ", " + data[0].product + " is " + totals + ". Thank you for the order!");
			connection.query("UPDATE Products SET stock = stock - " + quntityStocks + " WHERE item_id = " + id);
		} 
		else {
			console.log("Our apologies, Insufficient Quantity!"   + data[0].product + " to fulfill your order.");
		}
	displayProducts();
	});
};

displayProducts();