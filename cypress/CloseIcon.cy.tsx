import React from "react";
import CloseIcon from "../src/components/Icon/CloseIcon";

describe("<CloseIcon />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <CloseIcon
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />,
    );
  });
});
