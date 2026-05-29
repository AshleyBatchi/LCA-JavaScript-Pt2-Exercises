// MULTILINE STRING USING TEMPLATE LITERALS

const message = `
Welcome to JavaScript ES6!
This exercise focuses on:
- Template Literals
- Arrow Functions
- Modern JavaScript Syntax
`;

console.log(message);


// FUNCTION USING TEMPLATE LITERALS FOR HTML GENERATION

function createCard(title, description) {

    return `
    <div class="card">
        <h2>${title}</h2>
        <p>${description}</p>
    </div>
    `;
}

console.log(createCard("JavaScript", "JavaScript makes websites interactive"));


// REGULAR FUNCTION

function addNumbers(a, b) {

    return a + b;
}

console.log(addNumbers(5, 3));


// CONVERTED TO ARROW FUNCTION

const subtractNumbers = (a, b) => {

    return a - b;
};

console.log(subtractNumbers(10, 4));


// SIMPLE ARROW FUNCTION

const multiplyNumbers = (a, b) => a * b;

console.log(multiplyNumbers(6, 7));


// USING ARROW FUNCTIONS WITH ARRAY METHODS

const numbers = [1, 2, 3, 4, 5];


// map()

const doubledNumbers = numbers.map(number => number * 2);

console.log("Doubled Numbers:", doubledNumbers);


// filter()

const evenNumbers = numbers.filter(number => number % 2 === 0);

console.log("Even Numbers:", evenNumbers);


// forEach()

numbers.forEach(number => {

    console.log("Current Number:", number);
});