Cypress.Commands.add('login', (username, password) => {
    cy.visit('/');

    // Aceita cookies e fecha pop-ups
    cy.get('#onetrust-accept-btn-handler', { timeout: 10000 }).should('be.visible').click();
    cy.get('.gcap-close', { timeout: 10000 }).should('be.visible').click();
    cy.get('.jss107 > .MuiTypography-root', { timeout: 10000 }).should('be.visible').click();

    // Espera a navegação para o domínio correto antes de interagir
    cy.origin('https://accounts.superbid.net', { args: { username, password } }, ({ username, password }) => {
        cy.get('input[name="login"]').should('be.visible').type(username);
        cy.get('input[name="password"]').should('be.visible').type(password);
        cy.get('.btn-login').should('be.visible').click();
    });
    cy.get('.false > .MuiTypography-root').should('be.visible')
});


  