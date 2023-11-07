import React from "react";
import PlayerPresentationCard from "../src/components/PlayerPresentationCard";

describe("<PlayerPresentationCard />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<PlayerPresentationCard />);
    cy.get('[data-cy="player-card-component"]')
      .children()
      .should("have.length", 1);
  });
});
