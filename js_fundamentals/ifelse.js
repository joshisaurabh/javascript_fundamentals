// Exercises: if/else statements

// EXERCISE: What number's bigger?

// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

function greaterNum(num1,num2) {
	if (num1>num2){
		console.log("the greater number is "+num1);
	}
	else
	{
		console.log("the greater number is "+num2);
	}
}

greaterNum(5,9);
greaterNum(9,5);

// EXERCISE: The World Translator

// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

function helloWorld(code) {
	if (code==="es") {
		console.log("hola! World");
	} else if (code==="en") {
		console.log("Hello World");
	} else { console.log("Hallo World");
	}
}

helloWorld("en");
helloWorld("es");
helloWorld("de");



// EXERCISE: The Grade Assigner

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

function assignGrade(score) {
	if (score===1) {
		console.log("Your score is F");
	} else if (score===2) {
		console.log("Your score is D");
	} else if (score===3) {
		console.log("Your score is C");
	} else if (score===4) {
		console.log("Your score is B");
	} else { console.log("Your score is A");
	} 
}

assignGrade(1);
assignGrade(2);
assignGrade(3);
assignGrade(4);
assignGrade(5);

// EXERCISE: The Pluralizer

// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

function pluralize(noun,number){
	if (noun ==="cat" && number>1) {
		console.log(number+" cats");
	} else if (noun ==="cat" && number<=1) {
		console.log(number+" cat");
	} else if (noun ==="dog" && number>1) {
		console.log(number+" dogs");
	} else if (noun ==="dog" && number<=1) {
		console.log(number+" dog");
	}
}

pluralize("cat",5);
pluralize("dog",5);
pluralize("cat",1);
pluralize("dog",1);







