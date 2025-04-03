class LoginPage {
    visitarPagina() {
        cy.visit('/');
        cy.wait(2000); 
        cy.screenshot('00_visitar_pagina', { capture: 'viewport' }); 
    }
    aceitarCookiesEFecharPopups() {
        cy.get('#onetrust-accept-btn-handler', { timeout: 10000 }).should('be.visible').click();
        cy.get('.gcap-close', { timeout: 10000 }).should('be.visible').click();
        cy.get('.jss107 > .MuiTypography-root', { timeout: 10000 }).should('be.visible').click();
        cy.screenshot('01_pagina_de_login', { capture: 'viewport' });
    }
    fazerLogin(usuario, senha) {
        cy.origin('https://accounts.superbid.net', { args: { usuario, senha } }, ({ usuario, senha }) => {
            cy.get('input[name="login"]').should('be.visible').type(usuario);
            cy.get('input[name="password"]').should('be.visible').type(senha);
            cy.get('.btn-login').should('be.visible').click();
        });        
    }
    verificarLoginComSucesso() {
        cy.get('.false > .MuiTypography-root').should('be.visible');
        cy.screenshot('02_usuario_logado', { capture: 'viewport' });
    }
}

export default new LoginPage();
