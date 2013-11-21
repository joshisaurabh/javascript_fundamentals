// Exercises: for loops

// EXERCISE: The even/odd reporter

// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

for ( var i= 0; i<=20; i++) {
	if (i%2 === 0) {
		console.log(i+"is even number");
	} else if (i%3===0) {
		console.log(i+"is a odd number");
	}
}



// EXERCISE: Multiplication Tables

// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

for ( var i= 0; i<=10; i++) {
	console.log(i + "* 9 is "+ i*9);
}

// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).


for ( var i= 0; i<=10; i++) {
	for ( var j=0; j<=10; j++) {
		console.log(i+" * "+j+"is " + i*j);
	}
}

// EXERCISE: The Grade Assigner

// Check the results of assignGrade function from the conditionals exercise for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.

function assignGrade(value) {
	if (value>=90) {
		console.log("For " + value +", you got an A.")
	} else if (value<90 && value>=80) {
		console.log("For " + value +", you got a B.")
	} else if (value<80 && value>=70) {
		console.log("For " + value +", you got a C.")
	} else if (value<70 && value>=60) {
		console.log("For " + value +", you got a D.")
	} else if (value<60 && value>=50) {
		console.log("For " + value +", you got a E.")
	} else 
		console.log("For " + value +", you got a F.")
}


assignGrade(90);
assignGrade(80);
assignGrade(70);
assignGrade(60);
assignGrade(50);
assignGrade(40);



