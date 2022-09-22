// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
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
    message: 'Could you provide the link to your GitHub user profile, in case users want to access that?',
    name: 'github'
},{
    type: 'input',
    message: 'And in case a user has questions about your app and wants to contact you directly, please provide your email address.',
    name: 'email'
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
            err ? console.error(err) : console.log('Success!')
    ) 
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        
}

// Function call to initialize app
init();
