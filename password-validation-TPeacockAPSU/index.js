const validatePassword = require('./passwordvalidation'); //import the function

const read = require('readline');

const rl = readline.createInterface({
    intput: process.stdin,
    output: process.stdout
});

while (response !=q) {
    let response = rl.question('Please enter a password to validate (q to quit): ');
    validatePassword(response);
}
