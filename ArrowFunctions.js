//ARROW FUNCTIONS
//simply everything
//Step1. original way to write a function
function normalAddNumbers(num1, num2) {
    return num1 + num2;
}
//Step2. storing the function in a variable  
const constantAddNumbers = function (num1, num2) {
    return num1 + num2;
}
////Step3. arrow function
const ConstArrowAddNumbers = (num1, num2) => {
    return num1 + num2;
}
//Step4. function = (parameters) => return this
const ArrowAddNumbers = (num1, num2) => num1 + num2;

//if only one parameter no () needed
const timesTwo = num => num * 2;

let people = [
    { name: "Luke", age: 23 },
    { name: "Daniel", age: 42 },
    { name: "Sophie", age: 35 },
    { name: "Alicia", age: 29 }
];

//creates a new array called peopleUnder30 = use people and cycle through them (for each person if persons age less than 30, return it to new array)

let PeopleUnder30 = people.filter(person => person.age < 30);
