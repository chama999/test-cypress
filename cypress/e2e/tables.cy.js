describe('Table Test', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/tables');
    });

    it('Sort DESC Table number 1 and validate data in row 2 column Due. Should contain $51.00', () => {
        // Sort DESC
        cy.get('#table1 > thead > tr > th:nth-child(4)').click().click() //Double click to order ASC

        // Validar el dato en la fila 2 columna Due
        cy.get('#table1 > tbody > tr:nth-child(2) > td:nth-child(4)').should('contain', '$51.00');
    });

    it('Sort ASC Table 2 and validate data in row 2 column Due to be equal to $50.00', () => {
        // Sort ASC
        cy.get('#table2 > thead > tr > th > .dues').click();

        // Validar el dato en la fila 2 columna Due
        cy.get('#table2 > tbody > tr:nth-child(2) > .dues').should('contain', '$50.00')
    });

    afterEach(() => { cy.screenshot()})
});