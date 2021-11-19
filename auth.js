/**
* Authentication Module
*/

/* Imports */
const color = require('cli-color')

/* Registration Module */
const registration = function(email) {

    // Print Log
    console.log(color.green(`${email} added succesfully`))
}

/* Login Module */
const login = function(email, password) {

    // Print Log
    console.log(color.green(`${email} logged in successfully`))
}

/* Export Modules */
module.exports = {
    registration,
    login
}