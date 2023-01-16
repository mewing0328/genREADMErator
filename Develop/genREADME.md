# geneREADMErator 
[![MIT}](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description 
A command-line application generates a professional README.md file from user inputs. The application is built with [Node.js](https://nodejs.org/en/) and utilizes the [Inquirer 8.2.4](https://www.npmjs.com/package/inquirer/v/8.2.4) package from [npm.Inc.](https://www.npmjs.com/) to obtain user inputs.

## Table of Contents 
[1. Installation](#installation) 

[2. Usage](#usage) 

[3. License](#license) 

[4. Contributing](#contributing) 

[5. Tests](#tests) 

[6. Questions](#questions) 


## Installation 
The application has dependencies (see package.json file). Before using the application, install npm modules. Code for bash below or watch the demo video. npm install

## Usage 
The application will be invoked by using the following command node index.js. Then the user answers the questions in the prompt window. An answer is required for all questions.

## License 
geneREADMErator project is covered by MIT license. 

 To view the most current and full license description in opensource.org, click on the license name below.  

 [![MIT}](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Contributing 
For all contributions, please refer to [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md) for contributing guidelines.

## Tests 
To ensure user's answers are validated, test the function within the validate property in the promptUser object. Specifically, do not input an answer for each prompt to confirm validation works properly. For example, when the user does not input a title name (false boolean), then a string will instruct the user to do so. Once an input is added, then the boolean returns as true and the next question is displayed.

## Questions
Interested in seeing my other work? 
 
Check out my GitHub account: [mewing0328](https://github.com/mewing0328) 

If you have additional questions, please reach me at [masandraewing@gmail.com](mailto:masandraewing@gmail.com).
