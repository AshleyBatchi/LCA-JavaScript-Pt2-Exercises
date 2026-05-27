// SUM FUNCTION
function sum(num) {

    // Check if value is a number and integer
    if (typeof num !== "number" || num % 1 !== 0) {
        return "The value passed is not a number";
    }

    let total = 0;

    for (let i = 0; i <= num; i++) {
        total += i;
    }

    return total;
}

// Testing sum function
console.log(sum(5));
console.log(sum(10));
console.log(sum("Ashley"));
console.log(sum(4.5));


// FACTORIAL FUNCTION
function factorial(num) {

    let result = 1;
    let display = "";

    for (let i = num; i >= 1; i--) {

        result *= i;

        display += i;

        if (i !== 1) {
            display += " * ";
        }
    }

    console.log(display + " = " + result);
}

// Testing factorial
factorial(4);
factorial(5);


// FUNKYMATH FUNCTION
function funkyMath(a, b, c, d) {

    // 2 arguments
    if (arguments.length === 2) {
        return a - b;
    }

    // 3 arguments
    else if (arguments.length === 3) {
        return a + b + c;
    }

    // 4 arguments
    else if (arguments.length === 4) {

        let firstTotal = a + b;
        let secondTotal = c + d;

        return firstTotal / secondTotal;
    }

    else {
        return "Invalid number of arguments";
    }
}

// Testing funkyMath
console.log(funkyMath(10, 5));
console.log(funkyMath(1, 2, 3));
console.log(funkyMath(8, 2, 3, 5));


// ARRAY LOOP
let numbers = [1, 2, 33, 45, 6, 44];

let oddNumbers = [];

for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] % 2 !== 0) {
        oddNumbers.push(numbers[i]);
    }
}

// Arrange odd numbers from smallest to biggest
oddNumbers.sort(function(a, b) {
    return a - b;
});

console.log(oddNumbers);


// OBJECT
let me = {

    firstName: "Ashley",
    lastName: "Batchi",
    age: 19,
    favouriteColour: "Black",
    dreamCar: "BMW M4"
};

// Add favourite food
me.favouriteFood = "Pizza";

// Delete age
delete me.age;

console.log(me);