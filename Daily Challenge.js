//Array Extension Methods replaced with Arrow Functions

let pets = [
    {
        name: "Rex",
        age: 4,
        ownerName: "Luke"
    }, {
        name: "Spot",
        age: 7,
        ownerName: "Jade"
    }, {
        name: "Scooby",
        age: 3,
        ownerName: "Shaggy"
    }, {
        name: "Lucky",
        age: 1,
        ownerName: "Luke"
    }, {
        name: "Sadie",
        age: 3,
        ownerName: "Daniel"
    }, {
        name: "Duke",
        age: 5,
        ownerName: "Sabine"
    }
];

// 1 Use the Array.filter function to create an array of all the pets owned by Luke.

let lukesPets = pets.filter(pet => pet.ownerName == "Luke");
// console.log(lukesPets);

// 2 Use the Array.map function to create an array of all the names of the owners.

let owners = pets.map(pet => pet.ownerName);

// console.log(owners);

// 3 Use the Array.find function to retrieve the pet owned by Shaggy

let shaggysPet = pets.find(pet => pet.ownerName == "Shaggy");
console.log(shaggysPet);

// 4 Use the Array.filter function to create an array of all the pets that are less than 5 years old and that have either a pet or owner name that starts with "S"

let filteredPets = pets.filter(pet => pet.age < 5 && (pet.name[0] == "S" || pet.ownerName[0] == "S"));
console.log(filteredPets);

//String Extension Methods replaced with Arrow Functions

let sentence = "The quick brown fox jumps over the lazy dog.";

// 1 Write function that searches for a string inside the sentence above. The function should return true if the string is found or false otherwise

const searchInSentence = searchTerm => sentence.includes(searchTerm);

// console.log(searchInSentence("dog"));
// console.log(searchInSentence("program"));

// 2 Write function that searches for a string inside the sentence above. The function should return the index of the first occurrence of the string if the string is found or -1 otherwise

const findIndexInSentence = searchTerm => sentence.indexOf(searchTerm);

// console.log(findIndexInSentence("dog"));
// console.log(findIndexInSentence("program"));

// 3 Write a function that takes a string and returns the first three characters of that string

const firstThreeChars = myString => myString.substring(0, 3);

// console.log(firstThreeChars(sentence));

// 4 Write a function that takes a string and returns the last two characters of that string

const lastTwoChars = myString => myString.substring(myString.length - 2);

// console.log(lastTwoChars(sentence)); // Outputs "g."
// console.log(lastTwoChars("Luke")); // Outputs "ke"

// 5 Write a function that converts a string into an array of words where a word is any string separated by a space.

const stringToArray = myString => myString.split(" ");

// console.log(stringToArray(sentence));

// 6 Write a function that counts the number of times a string appears inside the sentence string above

const countOccurrences = (stringToSearch, searchTerm) => {
    return sentence.split("").reduce((counter, char) => char == searchTerm ? counter +1 : counter, 0);
}
console.log(countOccurrences("the"));
