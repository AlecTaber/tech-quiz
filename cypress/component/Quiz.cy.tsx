import React from 'react';
import   Quiz   from '../../client/src/components/Quiz';
import '@testing-library/cypress/add-commands';
import { mount } from 'cypress/react18';


const realQuestions = [
  // Hard coded questions for testing purposes
  {
    "question": "What is the output of print(2 ** 3)?",
    "answers": [
      { "text": "6", "isCorrect": false },
      { "text": "8", "isCorrect": true },
      { "text": "9", "isCorrect": false },
      { "text": "12", "isCorrect": false }
    ]
  },
  {
    "question": "Which of the following is a mutable data type in Python?",
    "answers": [
      { "text": "str", "isCorrect": false },
      { "text": "tuple", "isCorrect": false },
      { "text": "list", "isCorrect": true },
      { "text": "int", "isCorrect": false }
    ]
  },
  {
    "question": "What is the keyword used to define a function in Python?",
    "answers": [
      { "text": "function", "isCorrect": false },
      { "text": "func", "isCorrect": false },
      { "text": "def", "isCorrect": true },
      { "text": "define", "isCorrect": false }
    ]
  },
  {
    "question": "Which of the following is used to create an empty set?",
    "answers": [
      { "text": "{}", "isCorrect": false },
      { "text": "[]", "isCorrect": false },
      { "text": "set()", "isCorrect": true },
      { "text": "()", "isCorrect": false }
    ]
  },
  {
    "question": "What is the output of len('hello world')?",
    "answers": [
      { "text": "10", "isCorrect": false },
      { "text": "11", "isCorrect": true },
      { "text": "12", "isCorrect": false },
      { "text": "13", "isCorrect": false }
    ]
  },
  {
    "question": "Which method is used to remove whitespace from the beginning and end of a string?",
    "answers": [
      { "text": "strip()", "isCorrect": true },
      { "text": "trim()", "isCorrect": false },
      { "text": "clean()", "isCorrect": false },
      { "text": "remove()", "isCorrect": false }
    ]
  },
  {
    "question": "What does the // operator do in Python?",
    "answers": [
      { "text": "Performs integer division", "isCorrect": true },
      { "text": "Performs floating-point division", "isCorrect": false },
      { "text": "Calculates the power of a number", "isCorrect": false },
      { "text": "Performs a logical AND operation", "isCorrect": false }
    ]
  },
  {
    "question": "Which of the following is a valid variable name in Python?",
    "answers": [
      { "text": "1_variable", "isCorrect": false },
      { "text": "variable_1", "isCorrect": true },
      { "text": "variable-1", "isCorrect": false },
      { "text": "variable 1", "isCorrect": false }
    ]
  },
  {
    "question": "What is the output of type(3.14)?",
    "answers": [
      { "text": "<class 'int'>", "isCorrect": false },
      { "text": "<class 'float'>", "isCorrect": true },
      { "text": "<class 'complex'>", "isCorrect": false },
      { "text": "<class 'decimal'>", "isCorrect": false }
    ]
  },
  {
    "question": "Which of the following statements is used to handle exceptions in Python?",
    "answers": [
      { "text": "catch", "isCorrect": false },
      { "text": "except", "isCorrect": true },
      { "text": "handle", "isCorrect": false },
      { "text": "try", "isCorrect": false }
    ]
  },
  {
    "question": "What is the output of 'hello' + 'world'?",
    "answers": [
      { "text": "hello world", "isCorrect": false },
      { "text": "helloworld", "isCorrect": true },
      { "text": "hello+world", "isCorrect": false },
      { "text": "hello world!", "isCorrect": false }
    ]
  },
  {
    "question": "What does the range function do?",
    "answers": [
      { "text": "Generates a list of numbers", "isCorrect": true },
      { "text": "Creates an iterator that generates a sequence of numbers", "isCorrect": true },
      { "text": "Creates a list of tuples", "isCorrect": false },
      { "text": "Generates random numbers", "isCorrect": false }
    ]
  },
  {
    "question": "What is the correct syntax to create a dictionary in Python?",
    "answers": [
      { "text": "{'name': 'John', 'age': 30}", "isCorrect": true },
      { "text": "<'name': 'John', 'age': 30>", "isCorrect": false },
      { "text": "['name': 'John', 'age': 30]", "isCorrect": false },
      { "text": "('name': 'John', 'age': 30)", "isCorrect": false }
    ]
  },
  {
    "question": "Which of the following can be used to create an empty list in Python?",
    "answers": [
      { "text": "[]", "isCorrect": true },
      { "text": "{}", "isCorrect": false },
      { "text": "()", "isCorrect": false },
      { "text": "set()", "isCorrect": false }
    ]
  },
  {
    "question": "What does the method append() do in a list?",
    "answers": [
      { "text": "Adds a new element at the end of the list", "isCorrect": true },
      { "text": "Removes the last element of the list", "isCorrect": false },
      { "text": "Sorts the list in ascending order", "isCorrect": false },
      { "text": "Removes all elements from the list", "isCorrect": false }
    ]
  },
  {
    "question": "How do you create a tuple in Python?",
    "answers": [
      { "text": "[]", "isCorrect": false },
      { "text": "{}", "isCorrect": false },
      { "text": "()", "isCorrect": true },
      { "text": "tuple[]", "isCorrect": false }
    ]
  },
  {
    "question": "What is the output of print(3 == 3.0)?",
    "answers": [
      { "text": "False", "isCorrect": false },
      { "text": "True", "isCorrect": true },
      { "text": "3", "isCorrect": false },
      { "text": "3.0", "isCorrect": false }
    ]
  },
  {
    "question": "What is the keyword to define a class in Python?",
    "answers": [
      { "text": "function", "isCorrect": false },
      { "text": "def", "isCorrect": false },
      { "text": "class", "isCorrect": true },
      { "text": "module", "isCorrect": false }
    ]
  },
  {
    "question": "Which of the following is not a built-in data type in Python?",
    "answers": [
      { "text": "list", "isCorrect": false },
      { "text": "dict", "isCorrect": false },
      { "text": "tuple", "isCorrect": false },
      { "text": "array", "isCorrect": true }
    ]
  },
  {
    "question": "How do you start a comment in Python?",
    "answers": [
      { "text": "//", "isCorrect": false },
      { "text": "/*", "isCorrect": false },
      { "text": "#", "isCorrect": true },
      { "text": "<!--", "isCorrect": false }
    ]
  }
];

describe('Quiz Component', () => {
  beforeEach(() => {
    // No intercept here since we are using random questions manually coded
  });

  it('should start the quiz when the Start button is clicked', () => {
    mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click(); // Click the Start Quiz button
    cy.get('h2').should('be.visible'); // Ensure a question is displayed
    cy.get('h2').invoke('text').should('not.be.empty'); // Make sure a question is shown, but don't care which one
  });

  it('should display the next question when a question is answered', () => {
    mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click(); // Start the quiz
    cy.get('h2').should('be.visible').and('not.be.empty'); // Ensure the first question is visible
    cy.get('button').first().click(); // Click an answer button (doesn't matter which)
    cy.get('h2').should('be.visible').and('not.be.empty'); // Ensure a new question is shown
  });

  it('should display the score after answering 10 questions', () => {
    mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click(); // Start the quiz

    for (let i = 0; i < 10; i++) { // Iterate through all 10 questions
      cy.get('button').first().click(); // Answer each question, doesn't matter which answer
    }

    cy.get('h2').contains('Quiz Completed').should('be.visible'); // Check if the quiz is completed
    cy.get('div').contains('Your score').should('be.visible'); // Ensure the score is displayed
  });

  it('should allow starting a new quiz after the current one finishes', () => {
    mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click(); // Start the quiz

    for (let i = 0; i < 10; i++) { // Iterate through all 10 questions
      cy.get('button').first().click(); // Answer each question
    }

    cy.get('h2').contains('Quiz Completed').should('be.visible'); // Check if the quiz is completed
    cy.get('button').contains('Take New Quiz').click(); // Start a new quiz
    cy.get('h2').should('not.contain', 'Quiz Completed'); // Ensure the quiz is restarted
    cy.get('h2').should('be.visible').and('not.be.empty'); // Ensure a new question is displayed
  });
});
