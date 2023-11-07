// ***********************************************************
// This example support/component.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";
import { Provider } from "react-redux";
import { getStore } from "../../src/store/store";

// Alternatively you can use CommonJS syntax:
// require('./commands')

import { MountReturn, mount } from "cypress/react18";
import React from "react";

// Augment the Cypress namespace to include type definitions for
// your custom command.
// Alternatively, can be defined in cypress/support/component.d.ts
// with a <reference path="./component" /> at the top of your spec.
declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Mounts a React Component
       * @param component the React node to mount
       * @param options Additional options to pass into mount
       */
      mount(component: React.ReactNode): Cypress.Chainable<MountReturn>;
    }
  }
}

Cypress.Commands.add("mount", (component: React.ReactNode, options = {}) => {
  // Use defailt store if none are provided.
  const { reduxStore = getStore(), ...mountOptions } = options;

  const wrappedComponent = (
    <Provider store={reduxStore}>
      <>{component}</>
    </Provider>
  );
  return mount(wrappedComponent, mountOptions);
});

// Example use:
// cy.mount(<MyComponent />)
