// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');

// TODO: Template for the README with sections for the inputs
const generateREADME = ({ title, gitHub, email }) =>
`# ${title} 
## Description 
## Table of Contents 
[1. Installation](#installation) \n
[2. Usage](#usage) \n
[3. License](#license) \n
[4. Contributing](#contributing) \n
[5. Tests](#tests) \n
[6. Questions](#questions) \n
[7. Credits](#questions) \n
[8. Demos](#questions) \n
<br></br>

## Installation 
## Usage 
## License 
## Contributing 
## Tests 
## Questions
Interested in seeing my other work? \n 
Check out my GitHub account: [${gitHub}](https://github.com/${gitHub}) \n
If you have additional questions, please reach me at [${email} ](mailto:${email}). 

## Credits
## Demos
`
;

// TODO: Create an array of questions for user input
// const questions = [];
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        },        {
            type: 'input',
            name: 'gitHub',
            message: 'What is your GitHub username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        },
    ])
    .then((answers) => {
        const readMeFileContent = generateREADME (answers);
    
        fs.writeFile('genREADME.md', readMeFileContent, (err) => 
        err ? console.log(err) : console.log(`Successfully created a README.md file! \nIt is titled genREADME.md but you may change the name of the file.`)
        );
    });
    
// DO WE NEED THESE BELOW???!!!

    // TODO: Create a function to write README file
    // function writeToFile(fileName, data) {}

    // TODO: Create a function to initialize app
    //function init() {}

    // Function call to initialize app
    //init();
