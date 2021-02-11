describe('App Elements', () => {
  it('Should be able to visit the page and render the correct elements', () => {
    cy.visit('http://localhost:3000')
      cy.get('div').should("have.id", "root")
      cy.get('section').contains('a')
      cy.get('div').should("have.class", "background-img")
      
    });
    it('Should render 40 movie thumbnails', () => {
      cy.get('section').find('a').should("have.length", 40)
      cy.get('section').contains('a').click({multiple: true})
    });
  it('Should be able to navigate to individual movie and render elements', () => {
    cy.intercept('movies/581392', { fixture: 'example.json' }).as('getMovie')
    // cy.visit('http://localhost:3000/movie/581392')
    cy.request('https://rancid-tomatillos.herokuapp.com/api/v2/movies/581392')
    cy.wait('@getMovie')
      cy.get('footer').contains('div')
      cy.get('button').contains('GO BACK')
      // Check button clickable after style change
  });
});