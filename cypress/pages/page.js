class Page {
    get path() {return cy.location('pathname')}
  
    open(path) {
      return cy.visit('https://social-idols.verzview.com/backend/site')
    }
  }
  
  export default Page