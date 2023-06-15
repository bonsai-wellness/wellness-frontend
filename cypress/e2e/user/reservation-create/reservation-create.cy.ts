import "cypress-file-upload";
import {
    jwtToken
} from "cypress/jwtToken";


describe("Create Reservation", () => {
    it("Creates a reservation", () => {
        // Navigate
        cy.visit("/home/reservar/1", {
            onBeforeLoad: function (window) {
                window.localStorage.setItem('token', jwtToken)
            },
        });
        // Verify navigation
        cy.url().should('include', 'reservar');

        // Verify tab display
        cy.contains('Reservar').click().then(() => {

            cy.contains("Seleccione una cancha y fecha.");
            // Open select
            cy.get('[data-cy="select-espacio-hijo"]').click();

            // Select space
            cy.get('nz-option-item[ng-reflect-label="Cancha de Basquetbol 1"]').first().click().then( () =>{
                // Select reservation
                cy.get('[data-cy="reservation-slot"]').should('be.visible').first().click().then( () =>{
                    // Confirm reservation
                    cy.get('button.ant-btn.ant-btn-primary').should('be.visible').click();
                });
            });
        });


    });
});