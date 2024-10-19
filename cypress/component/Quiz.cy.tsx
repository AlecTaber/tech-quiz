import React from 'react';
import   Quiz   from '../../src/components/Quiz';
import { getQuestions } from '../../src/services/questionApi';
import '@testing-library/cypress/add-commands';


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

describe(Quiz, () => {
    beforeEach (() => {
        cy.stub(getQuestions, 'getQuestions').resolves(mockQuestions);
    });

    it('should start the quiz when the Start button is clicked', () => {
        cy.visit('/');
        cy.get('button').click();
        cy.get('h2').should('contain', 'What is the capital of France?');
    });
});

describe(Quiz, () => {
    beforeEach (() => {
        cy.stub(getQuestions, 'getQuestions').resolves(mockQuestions);
    });

    it('should display the next question when the current question is answered')
    cy.visit('/');
    cy.get('button').contains('Start Quiz').click();
    cy.get('button').contains('Paris').click();
    cy.get('h2').contains('What is the capital of Germany?').should('be visible');
});

describe(Quiz, () => {
    beforeEach (() => {
        cy.stub(getQuestions, 'getQuestions').resolves(mockQuestions);
    });

    it('should display the result when the last question is answered', () => {
        cy.visit('/');
        cy.get('button').contains('Start Quiz').click();
        cy.get('button').contains('Paris').click();
        cy.get('button').contains('Berlin').click();
        cy.get('button').contains('Next').click();
        cy.get('h2').contains('Your score is 1 out of 2').should('be visible');
    });
});

describe(Quiz, () => {
    beforeEach (() => {
        cy.stub(getQuestions, 'getQuestions').resolves(mockQuestions);
    });

    it('should start the next quiz when the Take New Quiz button is clicked', () => {
        cy.visit('/');
        cy.get('button').contains('Start Quiz').click();
        cy.get('button').contains('Paris').click();
        cy.get('button').contains('Berlin').click();
        cy.get('button').contains('Next').click();
        cy.get('button').contains('Take New Quiz').click();
        cy.get('h2').contains('What is the capital of France?').should('be visible');
    });
});


