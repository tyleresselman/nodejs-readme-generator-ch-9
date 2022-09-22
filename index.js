// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'So what is the title of your project?',
    name: 'title'
},{
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
},{
    type: 'input',
    message: 'Did anyone else contribute to your project?',
    name: 'contributions'
},{
    type: 'input',
    message: 'Would you please provide some instructions on how to test the app and/or an example?',
    name: 'testing'
},{
    type: 'list',
    message: 'Which license did you use for this app?',
    name: 'license',
    choices: ['The MIT License', 'Apache 2.0', 'GNU GPL v3.0', 'BSD License', 'N/A']
},{
    type: 'input',
    message: 'Could you please provide your GitHub username?',
    name: 'github'
},{
    type: 'input',
    message: 'And in case a user has questions about your app and wants to contact you directly, please provide your email address.',
    name: 'email'
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
            err ? console.error(err) : console.log('Success! Now just open the file called yourNewReadme.md and you are all set.')
    ) 
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(function(data){
            writeToFile("yourNewReadme.md", generateMarkdown(data))
        })      
}

// Function call to initialize app
init();
