describe('App Elements', () => {
  it('Should be able to visit the page and render the correct elements', () => {
    cy.visit('http://localhost:3000')
      cy.get('div').should("have.id", "root")
      cy.get('section').find('a')
      cy.get('div').should("have.class", "background-img")
    });

  it('Should render 40 movie thumbnails upon page load', () => {
      cy.get('section').find('a').should("have.length", 40)
    });

  it('Should fetch shallow dataset for all movies upon page load', () => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {fixture: 'movies.json'}).as('movieRoute')
    cy.visit('http://localhost:3000/')
    cy.wait('@movieRoute').then((interception) => {
      'response.ok'
    })
  })
});
