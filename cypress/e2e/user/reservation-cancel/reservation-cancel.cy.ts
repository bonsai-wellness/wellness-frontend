import "cypress-file-upload";
import {
    jwtToken
} from "cypress/jwtToken";

const API = "https://bonsai-rest.azurewebsites.net/api";

// options for request
const options = 
    {
        method: 'GET',
        url: API + `/reservation/user/`,
        headers: { Authorization: `Bearer ${jwtToken}` }
    }

describe("Cancel Reservation", () => {
    it("Cancels the oldest existing reservation", () => {
        // Navigate
        cy.visit("/home/mis-reservaciones", {
            onBeforeLoad: function (window) {
                window.localStorage.setItem('token', jwtToken)
            },
        });
        // Verify navigation
        cy.url().should('include', 'mis-reservaciones');

        // Verify title display
        cy.contains('Reservaciones');

        // Get user Reservations
        cy.request(options)
            .its('body')
            .then((val) => {

                // If a reservation exists cancel it
                if (val.length > 0) {
                    cy.get('[data-cy="btn-cancelar-reservacion"]').first().click().then(() => {
                        cy.get('button.ant-btn.ant-btn-primary').should('be.visible').click();
                    })
                // Log if there are no reservations
                } else {
                    cy.log("There are no reservations");
                }
            });


    });
});