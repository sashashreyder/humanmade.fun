/// <reference types="cypress" />

describe('homepage', () => {
  it('loads successfully', () => {
    cy.visit('http://localhost:5176') 
    cy.contains('Human') 
  })
})

describe('Hero section Functionality', () => {
  it('displays hero content and navigates to next section on arrow click', () => {
    cy.visit('http://localhost:5176')

    cy.contains('Built beyond the box.').should('be.visible')
    cy.contains('Use AI as a helper, not a creator.').should('be.visible')
    cy.contains('<Made by a human />').should('be.visible')

    cy.get('a[href="#comparison"]').should('be.visible').click()
    cy.url().should('include', '#comparison')  
  })
})

describe('comparison section, video bg is visible, buttons click', () => {
  it('displays all buttons and toggles view', () => {
    cy.visit('http://localhost:5176')
    cy.get('#templateButton').click()
    cy.contains('Template Section').should('be.visible')
    cy.get('#humanButton').click()
    cy.contains('Human').should('be.visible')  
    cy.get ('#enjoyTheMomentButton').click()
    cy.contains('Enjoy the moment →').should('be.visible')  
    cy.get('a[href="https://www.paffi.it/"] img[alt="abstract art"]').click()
    cy.get('a[href="https://tryboredcow.com/"] img[alt="artbook"]').click()
    cy.get('a[href="https://immersive-g.com/"] img[alt="digital art"]').click()
    cy.get('#backgroundVideo').should('be.visible')
    cy.get('a[href="https://www.paffi.it/"] .group').trigger('mouseover')
    cy.get('a[href="https://www.paffi.it/"] .group').trigger('mouseover')
    cy.contains('EMOTIONAL').should('be.visible')
    cy.get('a[href="https://tryboredcow.com/"] .group').trigger('mouseover')
    cy.contains('CREATIVE').should('be.visible')
    cy.get('a[href="https://immersive-g.com/"] .group').trigger('mouseover')
    cy.contains('DIFFERENT').should('be.visible')
  })
})


