//Default Values
//Used in functions or classes where a parameter is passed in

function sayHello(name, greeting = "Hello") { // declaring greeting = "Hello" will default that value
    console.log(`${greeting} ${name}`)
}

sayHello("Luke"); // Outputs Hello Luke by default
sayHello("Luke", "Hi There") //replaces the default with "Hi There"

function sayHey(greeting = "Hey", name){ 
    console.log(`${greeting} ${name}`)
}

sayHey("Luke"); //Luke will be passed in as a greeting and name will remain undefined