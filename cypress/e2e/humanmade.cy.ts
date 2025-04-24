/// <reference types="cypress" />

describe('homepage', () => {
  it('loads successfully', () => {
    cy.visit('http://localhost:5173') 
    cy.contains('Human') 
  })
})

describe('Hero section Functionality', () => {
  it('displays hero content and navigates to next section on arrow click', () => {
    cy.visit('http://localhost:5173')

    cy.contains('Built beyond the box.').should('be.visible')
    cy.contains('Use AI as a helper, not a creator.').should('be.visible')
    cy.contains('<Made by a human />').should('be.visible')

    cy.get('a[href="#comparison"]').should('be.visible').click()
    cy.url().should('include', '#comparison')  
  })
})

describe('comparison section, video bg is visible, buttons click', () => {
  it('displays all buttons and toggles view', () => {
    cy.visit('http://localhost:5173')
    cy.get('#templateButton').click()
    cy.contains('Template Section').should('be.visible')
    cy.get('#humanButton').click()
    cy.contains('Human').should('be.visible')  
    cy.get ('#enjoyTheMomentButton').click()
    cy.contains('Enjoy the moment →').should('be.visible')  
    cy.get('[href="https://www.paffi.it/"] > .mb-4 > .w-20').click() 
    cy.get('[href="https://tryboredcow.com/"] > .mb-4 > .w-20').click()
    cy.get('[href="https://immersive-g.com/"] > .mb-4 > .w-20').click()
    cy.get('#backgroundVideo').should('be.visible').should('have.prop', 'paused', false)
    cy.get('span').contains('EMOTIONAL').invoke('show').should('be.visible')

    

  })
})


