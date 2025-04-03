Cypress.Commands.add('login', (username, password) => {
    cy.visit('/');

    cy.get('#onetrust-accept-btn-handler', { timeout: 10000 }).should('be.visible').click();
    cy.get('.gcap-close', { timeout: 10000 }).should('be.visible').click();

    cy.get('.jss107 > .MuiTypography-root', { timeout: 10000 }).should('be.visible').click();

    // Como o login ocorre em um domínio diferente, encapsulamos no cy.origin()
    cy.origin('https://accounts.superbid.net', () => {
        cy.get('input[name="login"]').should('be.visible').type(Cypress.env('username'));
        cy.get('input[name="password"]').should('be.visible').type(Cypress.env('password'));
        cy.get('.btn-login').should('be.visible').click();
    });

    // Aguarda o redirecionamento de volta para garantir que o login foi bem-sucedido
    cy.url().should('include', 'superbid.net');
});
