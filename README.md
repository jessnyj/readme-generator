# readme-generator

![License](https://img.shields.io/badge/license-MIT-181717?style=for-the-badge) 

## Table of Contents
||||
|:-:|:-:|:-:|
|[Table Contents](#table-of-contents)|[Demo](#demo)|[Technologies Used](#technologies-used)
|[Description](#description)|[Work Involved](#work-involved)|[Code Snippet](#code-snippet)
|[Usage](#usage)|[Authors](#authors)|[Acknowledgments](#acknowledgments)

## Demo
Please check out a demo of this application here.
[Demo](https://drive.google.com/file/d/1NSjNwed3eKTkmpb16hU43h0_cjOKE2Or/view)

## Technologies Used
|||||
|:-:|:-:|:-:|:-:|
|Javascript		|inquirer	
|NodeJS	|Github

## Description
This command-line application allows a user to dynamically generate a README.md file by answering a few questions. Within the professional READ.md file, the sections include the title, description, table of contents, installation, usage, license, contributing, tests, and questions.

## Work Involved
For this application, it was necessary to install inquirer. I developed a list of prompt questions for the user to answer, in which I added those answers to a README template so that the desired file could be generated. 

## Code Snippet
* This code snippet highlights how inquirer is used in order to display a prompt for the user to fill out, and how the file is written.
```
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
```
```
## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This project is covered under ${answers.license}
```
```
    fs.writeFile('generateREADME.md', readmeTemp, (err) =>
         (err) ? console.error(err) : console.log('Success!')

    );
```

## Usage
![How to use](./Develop/readme-use.png)

## License
This project is covered under MIT.

## Authors
**UC Berkeley Coding Bootcamp**

**Jessny Joseph** 

[Github](https://github.com/jessnyj) | [LinkedIn](https://www.linkedin.com/in/jessny-joseph-361515201)

## Acknowledgments
I would like to thank the mentors and colleagues who helped inspire and improve upon this project.