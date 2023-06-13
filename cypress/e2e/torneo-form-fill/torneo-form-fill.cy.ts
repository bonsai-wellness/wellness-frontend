import { jwtToken } from "cypress/jwtToken";

describe("Torneo Form Filling", () => {
  it("Completes Form Fields", () => {
    cy.visit("/admin/torneos", {
      onBeforeLoad: function (window) {
        window.localStorage.setItem('token', jwtToken)
    }});
    cy.get("#add-button").click();
    cy.get('input[placeholder="Evento"]').type("Intramuros");
    cy.get('input[placeholder="Nombre"]').type("Intramuros Basquetbol");
    cy.get('input[placeholder="Location"]').type("http://maps.google.com/");
    cy.get('textarea[formcontrolname="description"]').type(
      "Torneo interno de basquetbol."
    );
    cy.get('nz-select[formControlName="deporte_id"]').click();
    cy.get('nz-option-item[ng-reflect-label="Basquetbol"]').click();
    cy.get('input[placeholder="Evento"]').click();
    cy.get('nz-select[formControlName="espacio_padre_id"]').click();
    cy.get(
      'nz-option-item[ng-reflect-label="Centro Deportivo Borregos I"]'
    ).click();
    cy.get('input[placeholder="Link"]').type("http://forms.google.com/");
    // cy.get('input[placeholder="End date"]').type("2023/05/27 20:14:13");
    cy.get('input[placeholder="Start date"]').click();
    cy.contains("21").click();
    cy.contains("Ok").click();
    cy.get('input[placeholder="End date"]').click();
    cy.contains("27").click();
    cy.contains("Ok").click();
    cy.contains("Cancel").click();
  });
});
