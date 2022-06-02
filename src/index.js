// import inquirer
const inquirer = require("inquirer");
// import fs
const fs = require("fs");
const questions = [
  {
    type: "input",
    name: "title",
    message: "Please enter title of your project?",
  },

  {
    type: "input",
    name: "description",
    message: "Please enter your project description",
  },

  {
    type: "input",
    name: "installation",
    message: "Please enter your project installation instructions:",
  },

  {
    type: "input",
    name: "usage",
    message: "Please enter your project usage information:",
  },
  {
    type: "list",
    name: "license",
    message: "Please choose your license",
    choices: ["MIT", "Apache"],
  },

  {
    type: "input",
    name: "contributions",
    message: "Please enter your project contribution guidelines:",
  },

  {
    type: "input",
    name: "test",
    message: "Please enter your project test instructions:",
  },

  {
    type: "input",
    name: "githubUserName",
    message: "Please enter your GitHub username:",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email address:",
  },
];

const init = async () => {
  // get answers for first set of questions
  const answers = await inquirer.prompt(questions);

  // display answers
  console.log(answers);

  //generate read me template using the answer
  generateReadME(answers);
  //create readme
  fs.writeFileSync("./filtered-users.json", templateReadMe);
};

const generateReadME = (answers) => {
  const templateReadMe = `# Project Title ![MIT](https://img.shields.io/badge/MIT-License-green)

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description
${answers.description}

## Installation

Please follow the instructions below:

````npm install````

## Usage

Please follow the instructions below:

\`\`\`npm run start\`\`\`

## License

MIT License

## Contributing

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.

## Tests

Please follow the instructions below:

\`\`\`npm run test\`\`\`

## Questions

Please contact me on my email: myemail@email.com

Visit my GitHub profile [here](https://github.com/surajverma2587)
`;
};
// 4. start your application
init();
