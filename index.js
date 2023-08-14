// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
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

function generateMarkdown(data) {
    return `# ${data.title}

## Description
${data.description || 'Add a project description here.'}

## Author
${data.author || 'Anonymous'}

## UserStory
${data.userStory || 'User Story'}

## AcceptanceCriteria
${data.acceptanceCriteria || 'Acceptance Criteria'}

${renderLicenseSection(data.license)}

    `;
}

module.exports = generateMarkdown
