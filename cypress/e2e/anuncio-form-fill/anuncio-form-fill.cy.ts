import "cypress-file-upload";
import { jwtToken
 } from "cypress/jwtToken";
describe("Anuncio Form Filling", () => {
  it("Completes Form Fields", () => {
    cy.visit("/admin/anuncios", {
      onBeforeLoad: function (window) {
        window.localStorage.setItem('token', jwtToken)
    }});
    cy.get('button[class="btn btn-primary"]').click();
    cy.get('input[placeholder="Link"]').type("Form");
    cy.get('textarea[formcontrolname="description"]').type("Partido de futbol.");
    cy.get('input[placeholder="Nombre"]').type("Clasico de Futbol");
    cy.get('input[type="file"]').attachFile("tenis.png");
    cy.contains("OK").click();
  });
});
