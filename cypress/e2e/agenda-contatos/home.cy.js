/// <reference types="cypress" />

describe('Teste para home', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    
    it('Ir para home', () => {
        cy.get('h1').should('have.text', 'Agenda de  contatos')
        })
        
        it('Add novo contacto', () => {
        cy.get('input[type="text"]').type('Fabricio Menezes')
        cy.get('input[type="email"]').type('fabricio-menezes@live.com')
        cy.get('input[type="tel"]').type('00 000000000')

        cy.get('button[type="submit"]').click()

        cy.get('.contato').should('have.length', 4)
    })
    
    it('Alterar contato', () => {
        cy.get('.contato > .sc-gueYoa > .edit').last().click()

        cy.get('input[type="text"]').clear().type('Fabricio da Silva Menezes')
        cy.get('input[type="email"]').clear().type('Fabricio_Menezes@live.com')
        cy.get('input[type="tel"]').clear().type('99 999999999')

        cy.get('.alterar').click()

        cy.get('.contato > .sc-dmqHEX > .sc-eDDNvR > :nth-child(1)').last().should('have.text', 'Fabricio da Silva Menezes')
        cy.get('.contato > .sc-dmqHEX > .sc-eDDNvR > :nth-child(2)').last().should('have.text', '99 999999999')
        cy.get('.contato > .sc-dmqHEX > .sc-eDDNvR > :nth-child(3)').last().should('have.text', 'Fabricio_Menezes@live.com')
    })

    it('Apagar contato', () => {
        cy.get('.contato > .sc-gueYoa > .delete').last().click()
        cy.get('.contato').should('have.length', 3)
    })
})