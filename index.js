const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: 'What is your Github username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
        {
            type: 'input',
            name: 'project name',
            message: 'What is your projects name?',
        },
        {
            type: 'input',
            name: 'project description',
            message: 'Please write a short description of your project.',
        },
        {
            type: 'input',
            name: 'license',
            message: 'What kind of license should your project have?',
            choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
        },
        {
            type: 'input',
            name: 'dependencies',
            message: 'What command should be run to install dependencies?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What command should be run to run tests?',
        },
        {
            type: 'input',
            name: 'user knowledge',
            message: 'What does the user need to know about using the repo?',
        },
        {
            type: 'input',
            name: 'dependencies',
            message: 'What does the user need to know about contributing to the repo?',
        },
    ]);
};
