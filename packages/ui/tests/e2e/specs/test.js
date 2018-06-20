// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Welcome to Your Vue.js App')
    cy.contains('h3', 'Common Module Info')
    cy.contains('h4', '@vue-monorepo-boilerplate/common')
    cy.contains('h5', '@vue-monorepo-boilerplate/server')
  })
})
