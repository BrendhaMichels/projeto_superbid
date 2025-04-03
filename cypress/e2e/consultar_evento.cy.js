describe('Buscar por Produto', () => {  
    beforeEach(() => {
        cy.login(Cypress.env('username'), Cypress.env('password'));             
    });     

    it('Buscar produto com o termo "Carros"', () => {
        cy.wait(1000)   
        cy.get('#search-input-field').should('be.visible').type('Carros{enter}'); 
        cy.get('input[name="filtro"][value="leilao"]').check();
        cy.get('input[name="filtro"][value="carros"]').check();
        cy.url().should('include', 'filter=auction.modalityDesc:leilao')
        .and('include', 'product.subCategory.category.description:carros');


    });
});
