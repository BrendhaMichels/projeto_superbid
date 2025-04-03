class ConsultarEventoPage {
    buscarProduto(termo) {
        cy.get('#search-input-field').should('be.visible').type(`${termo}{enter}`);
        cy.wait(2000);
        cy.screenshot('03_busca_termo', { capture: 'viewport' }); 
    }

    aplicarFiltro(nome, valor) {
        cy.get(`input[name="${nome}"][value="${valor}"]`).check();
        cy.wait(2000);
        cy.screenshot(`04_aplicar_filtro_${valor}`, { capture: 'viewport' }); 
    }

    verificarURLContem(texto) {
        cy.url().should('include', texto);
        cy.screenshot(`05_validacao_${texto.replace(/[^a-zA-Z0-9]/g, '_')}`, { capture: 'viewport' }); 
    }
}

export default new ConsultarEventoPage();
