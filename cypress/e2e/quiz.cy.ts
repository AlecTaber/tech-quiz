describe('Quiz Application E2E', () => {
    // Before each test, visit the main page of the quiz application
    beforeEach(() => {
      cy.visit('http://localhost:3001'); // Change this to match your app's local URL
    });
  
    it('should start the quiz when the Start button is clicked', () => {
      // 1. Check if the quiz starts when the user clicks "Start Quiz"
      cy.get('button').contains('Start Quiz').click(); // Simulate click on Start Quiz
      cy.get('h2').should('be.visible'); // Ensure a question is displayed
      cy.get('h2').invoke('text').should('not.be.empty'); // Ensure the question is not empty
    });
  
    it('should display the next question when a question is answered', () => {
      // 2. Check if answering a question shows the next question
      cy.get('button').contains('Start Quiz').click(); // Start the quiz
      cy.get('h2').should('be.visible'); // First question appears
      cy.get('button').first().click(); // Click the first answer button
      cy.get('h2').should('be.visible').and('not.be.empty'); // Ensure a new question appears
    });
  
    it('should display the score after answering 10 questions', () => {
      // 3. Ensure that the score is displayed after 10 questions are answered
      cy.get('button').contains('Start Quiz').click(); // Start the quiz
  
      for (let i = 0; i < 10; i++) {
        cy.get('button').first().click(); // Answer each question (click the first button)
      }
  
      cy.get('h2').contains('Quiz Completed').should('be.visible'); // Ensure the quiz is marked as completed
      cy.get('div').contains('Your score').should('be.visible'); // Ensure the score is displayed
    });
  
    it('should allow starting a new quiz after the current one finishes', () => {
      // 4. After completing the quiz, ensure the "Take New Quiz" button restarts the quiz
      cy.get('button').contains('Start Quiz').click(); // Start the quiz
  
      for (let i = 0; i < 10; i++) {
        cy.get('button').first().click(); // Answer each question
      }
  
      cy.get('h2').contains('Quiz Completed').should('be.visible'); // Ensure quiz is completed
      cy.get('button').contains('Take New Quiz').click(); // Start a new quiz
  
      cy.get('h2').should('not.contain', 'Quiz Completed'); // Ensure the quiz restarts
      cy.get('h2').should('be.visible').and('not.be.empty'); // Ensure a new question is displayed
    });
  });