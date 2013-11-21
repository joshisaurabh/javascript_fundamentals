// Exercises: Functions

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

function tellFortune(numOfChild,partner,location,title) {
	console.log("You will be a "+ title+" in "+location+", and married to "+partner+" with "+numOfChild+" kids.")
}

tellFortune(5,"Jane","Toronto","Jack of all trades");

// EXERCISE: The Age Calculator

// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either NN or NN"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.


function calculateAge(birth_year,current_year) {
	var difference1, difference2
	difference1 = current_year-birth_year;
	difference2 = difference1-1;
	console.log ("You are either "+ difference1+" or "+ difference2);

}

calculateAge (1900,2013);

function calculateAge(birth_year) {
	var difference1, difference2, current_year
	current_year = new Date().getFullYear()
	difference1 = current_year-birth_year;
	difference2 = difference1-1;
	console.log ("You are either "+ difference1+" or "+ difference2);

}

calculateAge (1900);



// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.


function calculateSupply(age,amountPerDay) {
	var maxAge, quantity;
	maxAge = 110;
	quantity = ((maxAge-age)*365)*amountPerDay;

	console.log("You will need "+ quantity+" to last you until the ripe old age of "+maxAge)

}

calculateSupply(70,10);
calculateSupply(10,100);
calculateSupply(23,1);



function calculateSupply(age,amountPerDay) {
	var maxAge, quantity;
	maxAge = 110;
	quantity = ((maxAge-age)*365)*Math.round(amountPerDay);

	console.log("You will need "+ quantity+" to last you until the ripe old age of "+maxAge)

}

calculateSupply(70,10.5);

// EXERCISE: The Geometrizer




// Create 2 functions that calculate properties of a circle, using the definitions here.

// Create a function called calcCircumfrence:

// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".

function calcCircumfrence(radius) {
	var circumference = 2*3.14*radius;
	console.log("The circumference of the circle with radius "+ radius +" is "+circumference);
}

calcCircumfrence(5);

// Create a function called calcArea:

// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".

function calcArea(radius) {
	var area = (radius*radius)*3.14;
	console.log("The area of the circle with radius "+radius+" is "+area);
}

calcArea(5);


// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:

// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."


function celsiusToFahrenheit(temp) {
	console.log(temp+"°C is "+((9/5)*temp+32)+" °F");
}

celsiusToFahrenheit(32);


function fahrenheitToCelsius(temp) {
	console.log(temp+"°F is "+(5/9*(temp-32))+" °C");
}

fahrenheitToCelsius(32);
