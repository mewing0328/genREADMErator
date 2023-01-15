//Packages needed for this application
const inquirer = require('inquirer')

const {writeFile} = require('fs').promises;

// Array of questions for user input & validation functions
const promptUser = () => {
    return inquirer.prompt([   
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            validate: function valid(name) { return name ? true : 'Project title required';}
        },     
        {
            type: 'input',
            name: 'description',
            message: 'What is a description for your project.',
            validate: function valid(name) { return name ? true : 'Project description required';}
        },     
        {
            type: 'input',
            name: 'installation',
            message: 'What are the installation instructions for your project.',
            validate: function valid(name) { return name ? true : 'Installation instructions required';}
        },  
        {
            type: 'input',
            name: 'usage',
            message: 'What is the usage information for your project.',
            validate: function valid(name) { return name ? true : 'Usage information required';}
        },  
        {
            type: 'input',
            name: 'contribution',
            message: 'What are the contributing guidelines for your project.',
            validate: function valid(name) { return name ? true : 'Contribution guidelines required';}
        }, 
        {
            type: 'input',
            name: 'test',
            message: 'What are test instructions for your project.',
            validate: function valid(name) { return name ? true : 'Test instructions required';}
        },
        {
            type: 'input',
            name: 'gitHub',
            message: 'What is your GitHub username?',
            validate: function valid(name) { return name ? true : 'GitHub username required';}
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: function valid(name) { return name ? true : 'Email address required';}
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license do you need for your project?',
            choices: ['Apache2.0','IPA', 'MIT', 'NASA1.3', 'Unlicense'],
            validate: function valid(name) { return name ? true : 'License required';}
        },
    ])
};

// Template for the README with sections for the inputs
const generateREADME = ({ title, description, installation, usage, contribution, test, gitHub, email, license }) =>
`# ${title} 
[![${license}}](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})

## Description 
${description}

## Table of Contents 
[1. Installation](#installation) \n
[2. Usage](#usage) \n
[3. License](#license) \n
[4. Contributing](#contributing) \n
[5. Tests](#tests) \n
[6. Questions](#questions) \n

<br></br>

## Installation 
${installation}

## Usage 
${usage}

## License 
${title} project is covered by ${license} license. 
\n To view the most current and full license description in opensource.org, click on the license name below.  
\n [![${license}}](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})

## Contributing 
${contribution}

## Tests 
${test}

## Questions
Interested in seeing my other work? \n 
Check out my GitHub account: [${gitHub}](https://github.com/${gitHub}) \n
If you have additional questions, please reach me at [${email}](mailto:${email}).`
;

//writeFileSync as a promise
const init = () => {
    promptUser()
    .then((answers) => writeFile('genREADME.md', generateREADME(answers)))
    .then(() => console.log(`Successfully created a README.md file! \nIt is titled genREADME.md but you may change the name of the file.`))
    .catch((err) => console.log(err));
};

init();
