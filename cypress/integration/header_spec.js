describe('Header Component', () => {
  it('Should contain an application name and logo', () => {
    cy.visit('http://localhost:3000')
      cy.get('div[class="logo-and-name-wrapper"]').find('h1').contains('Grouch Potato')
      cy.get('div[class="logo-and-name-wrapper"]').find('img')
  });

  it('Header should contain a search bar', () => {
    cy.visit('http://localhost:3000')
      cy.get('input[class="search-bar"]').should('have.attr', 'type', 'text')
  });

  it.only('User input should filter movies by title in main display', () => {
    cy.visit('http://localhost:3000')
    cy.wait(1000)
    cy.get('input').type('Trolls')
    cy.get('a').should('have.attr', 'id', '446893')
    cy.get('input').clear().type('Pinocchio')
    cy.get('a').should('have.attr', 'id', '413518')
    cy.get('input').clear().type('Mul')
    cy.get('a').should('have.attr', 'id', '337401')
    cy.get('input').clear().type('m')
    cy.get('section').find('a').should("have.length", 17)
  });
});
