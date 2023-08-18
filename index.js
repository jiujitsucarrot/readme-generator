// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },

    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project:'
    },

    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions here:'
    },

    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information here:'
    },

    {
        type: 'input',
        name: 'contribution',
        message: 'Please provide contribution guidelines here:'
    },

    {
        type: 'input',
        name: 'tests',
        message: 'Please provide test instructions here:'
    },

    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application:',
        choices: ['MIT', 'Apache 2.0', 'GNU GPLv3', 'None']  
    },

    {
        type: 'input',
        name: 'author',
        message: 'What is your name?'
    },

    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your GitHub username?'
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
];

const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('README file created successfully!');
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const readmeContent = generateMarkdown(answers);
            writeToFile('README.md', readmeContent);
        })
        .catch((error) => {
            console.error(error);
        });

}

// Function call to initialize app
init();
