// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
const questions = [{
    type: 'input',
    message: 'So what is the title of your project?',
    name: 'title'
},
{
    type: 'input',
    message: 'Please describe your project. What its purpose is and how it is meant to work for the user.',
    name: 'description'
},{
    type: 'input',
    message: 'How might one install your app? Are there any particular tools a user might need to do so?',
    name: 'installation'
},{
    type: 'input',
    message: 'Once your app is installed, how do you use it?',
    name: 'usage'
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
