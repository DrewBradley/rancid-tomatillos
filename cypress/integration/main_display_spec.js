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
    cy.visit('http://localhost:3000/movie/581392')
      cy.get('footer', { timeout: 10000 }).should('be.visible')
      cy.get('footer').find('img').should('have.attr', 'src').should('include', "https://image.tmdb.org/t/p/original//sy6DvAu72kjoseZEjocnm2ZZ09i.jpg")
      cy.get('footer').find('div')
      cy.get('button').contains('GO BACK')
      // Check button clickable after style change
    cy.visit('http://localhost:3000/movie/337401')
      cy.get('footer', { timeout: 10000 }).should('be.visible')
      cy.get('footer').find('img').should('have.attr', 'src').should('include', "https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg")
    cy.visit('http://localhost:3000/movie/694919')
      cy.get('footer', { timeout: 10000 }).should('be.visible')
      cy.get('footer').find('img').should('have.attr', 'src').should('include', "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg")
  });
});