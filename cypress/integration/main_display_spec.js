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
      cy.get('button').click()
    cy.visit('http://localhost:3000/movie/337401')
      cy.get('footer', { timeout: 10000 }).should('be.visible')
      cy.get('footer').find('img').should('have.attr', 'src').should('include', "https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg")
    cy.visit('http://localhost:3000/movie/694919')
      cy.get('footer', { timeout: 10000 }).should('be.visible')
      cy.get('footer').find('img').should('have.attr', 'src', "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg")
  });
  it('Should be able to navigate to any individual movie and render elements', () => {
    cy.visit('http://localhost:3000/')
      cy.get('a[id="613504"]').click()
      cy.get('button').click()
      cy.get('a[id="501979"]').should('have.attr', 'href', "/movie/501979")
      cy.get('a[id="501979"]').click()
      cy.get('footer', { timeout: 10000 }).should('be.visible')
      cy.get('footer').find('img').should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//4V2nTPfeB59TcqJcUfQ9ziTi7VN.jpg')
  });
  it('Should display a still from movie in individual view', () => {
    cy.visit('http://localhost:3000/')
      cy.get('a[id="340102"]').click()
      cy.get('section').should('have.attr', 'style', 'background-image: url("https://image.tmdb.org/t/p/original//eCIvqa3QVCx6H09bdeOS8Al2Sqy.jpg"); background-repeat: no-repeat; background-size: cover;')
  });
  it('Should fetch shallow dataset for all movies upon page load', () => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {fixture: 'movies.json'}).as('movieRoute')
    cy.visit('http://localhost:3000/')
    cy.wait('@movieRoute').then((interception) => {
      'response.ok'
    })
  })
  it('Should fetch full dataset for a specific movie when it is selected', () => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/581392', {fixture: 'one-movie.json'}).as('movieRoute')
    cy.visit('http://localhost:3000/movie/581392')
    cy.wait('@movieRoute').then((interception) => {
      'response.ok'
    })
  })
  it('Should send error if path does not exist', () => {
    cy.intercept('GET', '/movies/528085', {fixture: 'fail-movie.json'}).as('failRoute')
    cy.visit('http://localhost:3000/movie/528085')
    cy.wait('@failRoute').then((interception) => {
      expect(interception.response.body).to.include({"error":"No movie found with id:69420"})
    })
  })
  it('Should display error if route does not exist', () => {
    cy.visit('http://localhost:3000/')
    // cy.get('h1').contains('Oops! Something went wrong!')
    cy.get('div').find('img').should('have.attr', 'src', 'https://media.giphy.com/media/wSSooF0fJM97W/giphy.gif')
    cy.visit('http://localhost:3000/movie/696969')
    cy.get('h1').contains('Oops! Something went wrong!')
    cy.get('div').find('img').should('have.attr', 'src', 'https://media.giphy.com/media/wSSooF0fJM97W/giphy.gif')
  })
});