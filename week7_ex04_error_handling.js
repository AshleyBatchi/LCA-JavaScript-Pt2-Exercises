// FUNCTION TO VALIDATE USER INPUT
function validateInput(input) {

    try {

        if (input === "") {
            throw "Input cannot be empty";
        }

        if (typeof input !== "string") {
            throw "Input must be a string";
        }

        console.log("Valid input:", input);

    } catch (error) {

        console.log("Error:", error);
    }
}


// TESTING VALIDATION
validateInput("Ashley");
validateInput("");
validateInput(123);


// FUNCTION DEMONSTRATING MULTIPLE ERROR TYPES
function multipleErrors(num1, num2) {

    try {

        if (typeof num1 !== "number" || typeof num2 !== "number") {
            throw "Both values must be numbers";
        }

        if (num2 === 0) {
            throw "Cannot divide by zero";
        }

        let result = num1 / num2;

        console.log("Result:", result);

    } catch (error) {

        console.log("Error:", error);
    }
}


// TESTING ERRORS
multipleErrors(10, 2);
multipleErrors(10, 0);
multipleErrors("Ashley", 5);


// STRING HELPER FUNCTIONS
function capitalizeString(str) {

    return str.charAt(0).toUpperCase() + str.slice(1);
}


function reverseString(str) {

    return str.split("").reverse().join("");
}


function countCharacters(str) {

    return str.length;
}


// TEST STRING HELPERS
console.log(capitalizeString("ashley"));
console.log(reverseString("javascript"));
console.log(countCharacters("frontend"));


// ARRAY HELPER FUNCTIONS
function getLargestNumber(arr) {

    return Math.max(...arr);
}


function getSmallestNumber(arr) {

    return Math.min(...arr);
}


function getArraySum(arr) {

    let total = 0;

    for (let i = 0; i < arr.length; i++) {

        total += arr[i];
    }

    return total;
}


// TEST ARRAY HELPERS
let numbers = [4, 7, 2, 10, 5];

console.log(getLargestNumber(numbers));
console.log(getSmallestNumber(numbers));
console.log(getArraySum(numbers));