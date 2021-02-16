describe('Header Component', () => {
  it.only('Should contain an application name and logo', () => {
    cy.visit('http://localhost:3000')
      cy.get('div[class="logo-and-name-wrapper"]').find('h1').contains('Grouch Potato')
      cy.get('div[class="logo-and-name-wrapper"]').find('img')
  });

  it.only('Header should contain a search bar', () => {
    cy.visit('http://localhost:3000')
      cy.get('input[class="search-bar"]').should('have.attr', 'type', 'text')
  })
});
