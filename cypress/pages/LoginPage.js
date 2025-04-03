class LoginPage {
    visitarPagina() {
        cy.visit('/');
    }

    aceitarCookiesEFecharPopups() {
        cy.get('#onetrust-accept-btn-handler', { timeout: 10000 }).should('be.visible').click();
        cy.get('.gcap-close', { timeout: 10000 }).should('be.visible').click();
        cy.get('.jss107 > .MuiTypography-root', { timeout: 10000 }).should('be.visible').click();
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
    }
}

export default new LoginPage();
