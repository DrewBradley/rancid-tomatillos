describe('App Elements', () => {
  it('Should be able to visit the page and render the correct elements', () => {
    cy.visit('http://localhost:3000')
      cy.get('div').should("have.id", "root")
      cy.get('section').contains('a')
      cy.get('div').should("have.class", "background-img")
      cy.get('section').find('a').should("have.length", 40)
  });
});