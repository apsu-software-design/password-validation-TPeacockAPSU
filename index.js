
const validatePassword = require('./passwordvalidation'); //Imports the function.

const rl = readline.require('readline').createInterface({
    intput: process.stdin,
    output: process.stdout
});//Reads input from the console.

console.log("TPeacock's PW Validator");
console.log("Please enter the password you would like to check (type :quit to quit): ");

checkMe();//Function call to start the validation with the given input, if the input is :quit, the program ends.

function checkMe() {
    readline.question('', isItGood => {
        if (isItGood == ":quit") {
            console.log("Thanks for using TPeacock's PW Validator, goodbye!")
            readline.close();
        } else if (validatePassword(isItGood)) {
            console.log("The following password is valid: " + isItGood)
            checkMe();
        } else {
            console.log("The following password is invalid: " + isItGood);
            checkMe();
        }
    });
}