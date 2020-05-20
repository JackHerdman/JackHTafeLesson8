//an Exception is when an error happens

function addNumbers(num1, num2){
    if (isNaN(num1) || isNaN(num2)) {
        throw new Error("num 1 and num 2 must both be numbers");
    }
    // parse int will only pass a full number. parse float will pass decimals also
    return parseFloat(num1) + parseFloat(num2);
}
// console.log(addNumbers(12, 3));
// console.log(addNumbers(12.5, 3));
// console.log(addNumbers("12", 3));
// console.log(addNumbers("12a", 3));

try{
    console.log(addNumbers("12a", 3));
} catch (e) {
console.log(e);
} finally {

}

