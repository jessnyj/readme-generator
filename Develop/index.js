// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const util = require('util');

// const writeFileAsync = util.promisify(fs.writeFile);

// Create an array of questions for user input
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
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please write a short description of your project.',
        },
        {
            type: 'list',
            name: 'license',
            message: 'What kind of license should your project have?',
            choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What command should be run to install dependencies?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What command should be run to run tests?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What does the user need to know about using the repo?',
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'What does the user need to know about contributing to the repo?',
        },
    ])
    .then(answers => {
        console.log(answers);

    // Readme Development/Template
    const readmeTemp = (`
        # ${answers.title}

        ![License](https://img.shields.io/badge/license-${answers.license}-181717?style=for-the-badge) 


        ## Table of Contents
        *[Title](#title)
        *[Description](#description)
        *[Installation](#installation)
        *[Usage](#usage)
        *[License](#license)
        *[Contributing](#contributing)
        *[Tests](#tests)
        *[Questions](#questions)

        ## Description
        ${answers.description}

        ## Installation
        ${answers.installation}

        ## Usage
        ${answers.usage}

        ## License
        This project is covered under ${answers.license}

        ## Contributing
        ${answers.contributions}

        ## Tests
        ${answers.tests}

        ## Questions 
        *Github: ${answers.username}
        *Email: ${answers.email}
        `)
        console.log(readmeTemp);

        // Function to write README file  
        fs.writeFile('generateREADME.md', readmeTemp, (err) => 
        (err) ? console.error(err) : console.log('Success!')

        );
    });
};


// Create a function to initialize app
async function init() {
    try {
        const answers = await promptUser();

    } catch (err) {
        console.log(err);
    }
};

// Function call to initialize app
init();
