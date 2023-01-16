//Packages needed for this application
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')
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
            message: 'What is a description for your project?',
            validate: function valid(name) { return name ? true : 'Project description required';}
        },     
        {
            type: 'input',
            name: 'installation',
            message: 'What are the installation instructions for your project?',
            validate: function valid(name) { return name ? true : 'Installation instructions required';}
        },  
        {
            type: 'input',
            name: 'usage',
            message: 'What is the usage information for your project?',
            validate: function valid(name) { return name ? true : 'Usage information required';}
        },  
        {
            type: 'input',
            name: 'contribution',
            message: 'What are the contributing guidelines for your project?',
            validate: function valid(name) { return name ? true : 'Contribution guidelines required';}
        }, 
        {
            type: 'input',
            name: 'test',
            message: 'What are test instructions for your project?',
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

// writeFileSync as a promise
// reference generateMarkdown.js in utils folder for generating the md code.
const init = () => {
    promptUser()
    .then((answers) => writeFile('genREADME.md', generateMarkdown(answers)))
    .then(() => console.log(`Successfully created a README.md file! \nIt is titled genREADME.md but you may change the name of the file.`))
    .catch((err) => console.log(err));
};

init();
