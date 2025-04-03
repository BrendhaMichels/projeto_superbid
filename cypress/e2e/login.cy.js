describe('Página Inicial', () => {
    it('deve carregar a página corretamente', () => {
      cy.visit('/')
      cy.get('input[name="login"]').should('be.visible').type('bmramos')
      cy.get('input[name="password"]').should('be.visible').type('Cff96321!')
      cy.get('.btn-login').should('be.visible').click()
    });
  });
  