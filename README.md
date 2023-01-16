# geneREADMErator
[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description
A command-line application generates a professional README.md file from user inputs. The application is built with [Node.js](https://nodejs.org/en/) and utilizes the [Inquirer 8.2.4](https://www.npmjs.com/package/inquirer/v/8.2.4) package from [npm.Inc.](https://www.npmjs.com/) to obtain user inputs.

## Table of Contents
[1. Installation](#installation)

[2. Usage](#usage)

[3. Demo](#demo)

[4. Contributing](#contributing)

[5. Tests](#tests)

[6. Questions](#questions)

[7. Credits](#credit)

[8. License](#license)

[9. Screenshots](#screenshots)

<br></br>

## Installation 
The application has dependencies (see package.json file). Before using the application, install npm modules.

Code for bash below or watch the [demo](#demo) video.

```bash
npm install
```

## Usage 
The application will be invoked by using the following command:

```bash
node index.js
```
Then the user answers the questions in the prompt window. An answer is required for all questions.

## Demo
[Link for demo video](https://watch.screencastify.com/v/XYXCWLWnaF6u1gqmZ5A5) (Length of video: 2 minutes and 23 seconds)

Video is also within the assets folder named "geneREADMErator.mp4".

```
A walkthrough video that demonstrates: 
- the functionality of the README generator.
- how a user would invoke the application from the command line.
- how a user would enter responses to all of the prompts in the application.
- a generated README that matches the user input and has a functioning table of contents.
```

## Contributing 
For all contributions, please refer to [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md) for contributing guidelines.

## Tests 
To ensure user's answers are validated, test the function within the validate property in the promptUser object. Specifically, do not input an answer for each prompt to confirm validation works properly. 

For example, when the user does not input a title name (false boolean), then a string will instruct the user to do so. Once an input is added, then the boolean returns as true and the next question is displayed.

## Questions
Interested in seeing my other work?

Check out my GitHub account: [mewing0328](https://github.com/mewing0328).

If you have additional questions, please reach me at [masandraewing@gmail.com](mailto:masandraewing@gmail.com).

## Credits
*[Anchor links for Table of Contents in README.md](https://gist.github.com/rachelhyman/b1f109155c9dafffe618#real-cool-heading)

*[How to add Link of E-mail address to README](https://gitlab.com/gitlab-org/gitlab/-/issues/26521)

*[GitHub Repo lukas-h](https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba): To obtain license badges hyperlinks.

*[Open Source Initiative](https://opensource.org/): To obtain license hyperlinks for descriptions.

*[Professional README Guide](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)

## License 
geneREADMErator project is covered by MIT license. 

 To view the most current and full license description in opensource.org, click on the license name below.  

 [![MIT}](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

 ## Screenshots 
Utilized Visual Studio Code

1. Initiate the application by right clicking on the folder, choosing "Open in External Terminal"

    <img src=./Develop/assets/externalTerminal.png style="width:30rem">

2. Input "npm install" in the terminal to install dependencies.

    <img src=./Develop/assets/npmInstall.png style="width:30rem">

3. Input "node index" or "node index.js" in the terminal to start up the application 

    <img src=./Develop/assets/nodeIndex.png style="width:30rem">

4. Answer the questions within the terminal prompts - utilizes the [Inquirer 8.2.4](https://www.npmjs.com/package/inquirer/v/8.2.4) package from [npm.Inc.](https://www.npmjs.com/) to obtain user inputs

    <img src=./Develop/assets/promptQuestions.png style="width:30rem">

5. After all questions are answered, the application generates a README.md file titled "genREADME.md". User is informed that user can change the name of the generated file.

    <img src=./Develop/assets/promptQuestions.png style="width:30rem">