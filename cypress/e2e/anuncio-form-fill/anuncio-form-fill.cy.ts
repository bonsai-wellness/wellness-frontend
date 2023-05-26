import "cypress-file-upload";

describe("Anuncio Form Filling", () => {
  it("Completes Form Fields", () => {
    cy.visit("/admin/anuncios");
    cy.get("#add-button").click();
    cy.get('input[placeholder="Link"]').type("Form");
    cy.get('input[placeholder="Description"]').type("Partido de futbol.");
    cy.get('input[placeholder="Nombre"]').type("Clasico de Futbol");
    cy.get('input[type="file"]').attachFile("tenis.png");
    cy.contains("OK").click();
  });
});
