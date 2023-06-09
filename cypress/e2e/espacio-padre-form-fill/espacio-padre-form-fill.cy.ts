import { jwtToken } from "../../jwtToken";

describe("Espacio Padre Form Filling", () => {
  it("Completes Form Fields", () => {
    cy.visit("/admin/espacios", {
      onBeforeLoad: function (window) {
        window.localStorage.setItem('token', jwtToken)
      }
    });
    cy.contains("div", "+ Agregar instalacion Padre").click();
    cy.get('input[placeholder="Codigo"]').type("CDPIII");
    cy.get('input[placeholder="Nombre"]').type("Centro Deportivo Borregos III");
    cy.get('input[placeholder="Map Url"]').type("http://google.com/");
    cy.contains("button", "OK").click();
  });
});
