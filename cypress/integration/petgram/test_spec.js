/* global describe, it, expect, cy */
describe('Petgram', function() {
    it('to see if works', function() {
        cy.visit('/')
    })

    it('Navigate through categories and see the photos', function() {
        cy.visit('/pet/1')
        cy.get('article')
    })

    it('using navbar to navigate to the home page', function() {
        cy.visit('/pet/1')
        cy.get('nav a').first().click()
        cy.url().should('include', '/')
    })
})