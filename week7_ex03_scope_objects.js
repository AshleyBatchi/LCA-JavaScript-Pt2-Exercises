// Global variable
let globalCount = 0;


// Function demonstrating local scope
function localScopeExample() {

    let localCount = 5;

    console.log("Local variable:", localCount);
}


// Function modifying variables
function modifyVariables() {

    globalCount++;

    let localVariable = 10;
    localVariable++;

    console.log("Modified globalCount:", globalCount);
    console.log("Modified localVariable:", localVariable);
}


// Student constructor function
function Student(firstName, lastName, age, course) {

    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.course = course;

    this.introduce = function() {
        console.log(
            "Hi, my name is " +
            this.firstName +
            " " +
            this.lastName +
            " and I study " +
            this.course
        );
    };
}


// Student instances
let student1 = new Student("Ashley", "Batchi", 19, "Frontend Development");

let student2 = new Student("John", "Doe", 21, "Backend Development");

let student3 = new Student("Sarah", "Smith", 20, "UI/UX Design");


// Testing student objects
student1.introduce();
student2.introduce();
student3.introduce();


// Object literal with nested properties
let me = {

    firstName: "Ashley",
    lastName: "Batchi",

    address: {
        city: "Cape Town",
        country: "South Africa"
    },

    hobbies: {
        hobby1: "Coding",
        hobby2: "Boxing",
        hobby3: "Content Creation"
    }
};


// Testing functions
localScopeExample();
modifyVariables();


// Print object
console.log(me);