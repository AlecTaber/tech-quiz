# Tech Quiz Testing
  ![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)
## Description 

This is a simple quiz applciation that was provided to me to write tests for using Cypress. It uses both E2E and component testing to test if the quiz has been started, the questions have been answered, the test was completed and your score is displayed, and if a user started a new test.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Tests](#tests)
- [Contact](#contact)

## Installation

In order to install this project, you will need to clone down the repository to your local machine. After it has been cloned down, cd into the directory and run an npm i to install the needed dependencies. Once the dependencies are installed, do a npm run build, followed by an npm run seed. Now that these steps are completed, do an npm run start:dev to start the frontend and backend concurrently. This will open the application on a localhost.

## Usage

To use this quiz, you can click the "Start Quiz" button and answer each question that you have been provided with. After you answer all ten questions, you will be given your score out of ten and the option to start a new quiz. To start the new quiz, click the "Take New Quiz" button.

## Credits

This project was created by Alec Taber.

## License
  
  This project uses the MIT License. For more information, visit [license link](https://opensource.org/licenses/MIT).

## Features

- Randomly generated quiz questions
- 10-question quizzes
- Score display after completing the quiz
- Option to restart the quiz after completion
- Responsive and user-friendly interface

## Tests

This application uses both E2E and component testing with Cypress. It tests each step of the applciation to make sure everything is running the way its supposed to. In order to run the tests, you will need to start the application by doing a npm run start:dev. After the applciation is running, in another terminal, do an npm run cypress. This will lauch cypress alongside the application. You can then click on which type of testing you want to run, either E2E or component. You will then be prompted to pick which browser you want to run the tests in. After the browser is selected, you will be given the file you will be testing. Click on the given file and watch the tests run successfully! Here is a video showing you the steps to achieve the wanted outcome. https://drive.google.com/file/d/1NPG8lED156Zsam8BXE-vSzghnc-xk6F_/view?usp=sharing 

## Contact

- GitHub: [AlecTaber](https://github.com/AlecTaber)
- Email: [alectaber12@gmail.com](mailto:alectaber12@gmail.com)

