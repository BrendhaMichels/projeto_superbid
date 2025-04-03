import ConsultarEventoPage from '../pages/ConsultarEventoPage';

describe('Buscar por Produto', () => {  
    beforeEach(() => {
        cy.fazerLogin(Cypress.env('username'), Cypress.env('password'));
    });

    it('Buscar produto com o termo "Carros"', () => {
        cy.wait(1000);
        ConsultarEventoPage.buscarProduto('Carros');
        ConsultarEventoPage.aplicarFiltro('filtro', 'leilao');
        ConsultarEventoPage.aplicarFiltro('filtro', 'carros');
        ConsultarEventoPage.verificarURLContem('filter=auction.modalityDesc:leilao');
        ConsultarEventoPage.verificarURLContem('product.subCategory.category.description:carros');        
    });
});
