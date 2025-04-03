class ConsultarEventoPage {
    buscarProduto(termo) {
        cy.get('#search-input-field').should('be.visible').type(`${termo}{enter}`);
    }

    aplicarFiltro(nomeFiltro, valorFiltro) {
        cy.get(`input[name="${nomeFiltro}"][value="${valorFiltro}"]`).check();
    }

    verificarURLContem(valorEsperado) {
        cy.url().should('include', valorEsperado);
    }

}

export default new ConsultarEventoPage();
