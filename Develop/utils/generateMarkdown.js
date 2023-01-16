// Template for the README with sections for the inputs
// NOTE: Utilizing hyperlink for license so user can reference 
  // the most current license in opensource.org. 
  // Some licenses may be superseded by newer versions, retired, or determined
  // redundant in the future.

const generateMarkdown = ({ title, description, installation, usage, contribution, test, gitHub, email, license }) =>
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
If you have additional questions, please reach me at [${email}](mailto:${email}).
`;

module.exports = generateMarkdown;
