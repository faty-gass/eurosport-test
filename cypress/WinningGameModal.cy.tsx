import React from "react";
import WinningGameModal from "../src/components/WinningGameModal";

describe("<WinningGameModal />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <WinningGameModal
        gamesList={[]}
        isOpen={true}
        setIsOpen={() => {
          return;
        }}
      />,
    );
    cy.get('[data-cy="games-modal"]').contains("Winning Games");
    cy.get('[data-cy="games-modal-list"]').should("have.class", "text-black");
  });
});
