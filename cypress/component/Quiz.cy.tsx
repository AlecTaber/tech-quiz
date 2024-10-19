import React from 'react';
import   Quiz   from '../../client/src/components/Quiz';
import { getQuestions } from '../../client/src/services/questionApi';
import '@testing-library/cypress/add-commands';
import { mount } from 'cypress/react18';


const mockQuestions = [
    {
        question: 'What is the capital of France?',
        correctAnswer: 'Paris',
        incorrectAnswers: ['London', 'Berlin', 'Madrid'],
    },
    {
        question: 'What is the capital of Germany?',
        correctAnswer: 'Berlin',
        incorrectAnswers: ['Paris', 'London', 'Madrid'],
    },
];

describe('Quiz Component', () => {
    beforeEach(() => {
        cy.stub(getQuestions).returns(Promise.resolve(mockQuestions)); // Stubbing API calls
    });
  
    it('should start the quiz when the Start button is clicked', () => {
      mount(<Quiz />);
      cy.get('button').contains('Start Quiz').click(); // Click the Start Quiz button
      cy.get('h2').should('contain', 'What is the capital of France?'); // Check first question
    });
  
    it('should display the next question when the current question is answered', () => {
      mount(<Quiz />);
      cy.get('button').contains('Start Quiz').click();
      cy.get('button').contains('Paris').click(); // Answer the first question
      cy.get('h2').should('contain', 'What is the capital of Germany?'); // Check second question
    });
  
    it('should display the result when the last question is answered', () => {
      mount(<Quiz />);
      cy.get('button').contains('Start Quiz').click();
      cy.get('button').contains('Paris').click(); // Answer first question
      cy.get('button').contains('Berlin').click(); // Answer second question
      cy.get('h2').contains('Your score is 2 out of 2').should('be.visible'); // Check final score
    });
  
    it('should start the next quiz when the Take New Quiz button is clicked', () => {
      mount(<Quiz />);
      cy.get('button').contains('Start Quiz').click();
      cy.get('button').contains('Paris').click(); // Answer first question
      cy.get('button').contains('Berlin').click(); // Answer second question
      cy.get('h2').contains('Your score is 2 out of 2').should('be.visible');
      cy.get('button').contains('Take New Quiz').click(); // Click 'Take New Quiz'
      cy.get('h2').should('contain', 'What is the capital of France?'); // Check that quiz restarted
    });
  });


