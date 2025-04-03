describe('Testes de Login', () => {
    it('Deve fazer login com sucesso', () => {
      cy.login(Cypress.env('username'), Cypress.env('password'));
    });
  });
  