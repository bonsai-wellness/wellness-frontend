import "cypress-file-upload";
import { jwtToken } from "cypress/jwtToken";

describe("Espacio Form Filling", () => {
  it("Completes Form Fields", () => {
    cy.visit("/admin/espacios", {
      onBeforeLoad: function (window) {
        window.localStorage.setItem('token', jwtToken)
      }
    });
    cy.get("#add-button").click();
    cy.get("#espacio-form-codigo").type("CP10");
    cy.get("#espacio-form-nombre").type("Cancha de Padel 10");
    cy.get('nz-select[formControlName="deporte_id"]').click();
    cy.get('nz-option-item[ng-reflect-label="Padel"]').click();
    cy.get("#espacio-form-codigo").click();
    cy.get('nz-select[formControlName="espacio_padre_id"]').click();
    cy.get(
      'nz-option-item[ng-reflect-label="Centro Deportivo Borregos I"]'
    ).click();
    cy.get("#espacio-form-codigo").click();
    cy.get('nz-select[nzplaceHolder="Punto Importante"]').click();
    cy.get('nz-option-item[ng-reflect-label="Llevar raqueta"]').click();
    cy.get("#espacio-form-codigo").click();
    cy.get('textarea[placeholder="Detalles"]').type("Cancha para jugar padel");
    cy.get('input[placeholder="Tiempo max de reserva"]').type("90");
    cy.get('input[placeholder="Capacidad max"]').type("4");
    cy.get('input[type="file"]').attachFile("tenis.png");
    cy.contains("span", "OK").click();
  });
});
