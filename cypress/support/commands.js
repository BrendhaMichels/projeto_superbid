import LoginPage from '../pages/LoginPage';

Cypress.Commands.add('fazerLogin', (usuario, senha) => {
    LoginPage.visitarPagina();
    LoginPage.aceitarCookiesEFecharPopups();
    LoginPage.fazerLogin(usuario, senha);
    LoginPage.verificarLoginComSucesso();
});
