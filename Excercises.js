//Default Values
//1. Create a method called addNumbers. The function should take 2 numbers as its parameters and return the sum of those numbers. Both parameters should default to 0 if they are not provided.
function addNumbers(num1 = 0, num2 = 0) {
    return num1 + num2
}
//2. Create a method called sayHello with 2 parameters, name and greeting. The function should log the greeting followed by the name. The greeting parameter should default to "Hello".
function sayHello(name, greeting = "Hello") {
    console.log(`${greeting} ${name}`);
}

//Arrow Functions
// 1 Convert this function to an arrow function
function multiplyNumbers(num1, num2) {
    return num1 * num2;
}

const arrowMultiplyNumbers = (num1, num2) => num1 * num2;

// 2 Convert this function to an arrow function
function personOver40(person) {
    return person.age > 40;
}

const arrowPersonOver40 = person => person.age > 40;

// 3 Convert this function to an arrow function
function getFullName(person) {
    return `${person.firstName} ${person.lastName}`;
}

const arrowGetFullName = person => `${person.firstName} ${person.lastName}`

// 4 Convert this function to an arrow function
function getPersonTitleOriginal(person) {
    if (person.preferedTitle) {
        return person.preferedTitle;
    } else if (person.gender == "male") {
        return "Mr.";
    } else if (person.gender == "female") {
        if (person.maritalStatus == "married") {
            return "Mrs.";
        } else if (person.maritalStatus == "unmarried") {
            return "Miss";
        } else {
            return "Ms."
        }
    } else {
        return "Mx."
    }
}

const getPersonTitleArrow = person => {
    (person.preferedTitle) ? person.preferedTitle
        : (person.gender == "male") ? "Mr."
            : (person.gender == "female") ? (person.maritalStatus == "married") ? "Mrs"
                : (person.maritalStatus == "unmarried") ? "Miss" : "Ms." : "Mx."
}

//Exceptions
//1. Create a function called divide that takes 2 numbers as parameters. The function should divide the first number by the second number and return the result. If the second number is a 0, the function should throw an Error object.
function divide(num1, num2) {
    if (num2 == 0) {
        throw new Error("cannot divide by 0")
    }
    return num1 / num2;
}

// 2. Call the above function inside a try/catch block. You should log the exception message and then continue with the program.

try {
    console.log(divide(10, 0));
} catch (e) {
    console.log(e.message);
}

console.log("it has continued")