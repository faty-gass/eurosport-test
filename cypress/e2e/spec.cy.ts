describe("Landing page e2e", () => {
  it("Visits the landing page", () => {
    cy.visit("http://localhost:3000/");
  });

  it("Displays all the stats for each players", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="player-card-name"]').should("be.visible");
    cy.get('[data-cy="player-card-flag"]').should("be.visible");
    cy.get('[data-cy="player-card-picture"]').should("be.visible");
    cy.get('[data-cy="player-card-rank"]').should("be.visible");
    cy.get('[data-cy="player-card-age"]').should("be.visible");
    cy.get('[data-cy="player-card-height"]').should("be.visible");
    cy.get('[data-cy="player-card-weight"]').should("be.visible");
    cy.get('[data-cy="player-card-total-played-time"]').should("be.visible");
    cy.get('[data-cy="player-card-wins"]').should("be.visible");
    cy.get('[data-cy="player-card-losses"]').should("be.visible");
  });

  it("Opens the modal when clicking on the card", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="player-card-component"]').click();
    cy.get('[data-cy="games-modal"]').should("be.visible");
  });

  it("Shouldn't display the modal if the card has not been clicked", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="games-modal-component"]').should("not.be.visible");
  });
});
