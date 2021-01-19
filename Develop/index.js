// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

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
            type: 'input',
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
    ]).then({
      username,
      email,
      title,
      description,
      license,
      installation,
      tests,
      usage,
      contributions,
    }) => {
        const readmeTemp = (`
        # ${title}

        ## Description
        ${description}

        ## Installation
        ${installation}

        ## Usage
        ${usage}

        ## License
        ${license}

        ## Contributing
        ${contributing}

        ## Tests
        ${tests}

        ## Contact 
        *Github: ${username}
        *Email: ${email}
        
        `)
    }
    
    
    
    

};





    // Create a function to write README file

//     fs.writeFile('generateREADME.md', answers, (err) => {
//     if (err)
//         console.log(err);
//     else {`


//    `}


// });

// Create a function to initialize app
async function init() => {
    try {


    }
}

// Function call to initialize app
init();
