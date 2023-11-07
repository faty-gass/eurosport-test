# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Launch the application

In the project directory, you can run:

### `yarn install`

Create the node_modules folder and install all packages needed to run the project.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn format`

Auto format all the files according to the prettier configuration.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Testing the app with Cypress

We are using Cypress test the app.

### `yarn cypress:open`

- Lauches the Cypress console.
- First you will need to choose the type of test you want to run: e2e testing or component testing.
- Then you can choose the browser in which you want to open the interface of Cypress test runner.
- For E2E Testing : you will find one file spec.cy.ts to run the test on the app.
- For Component testing : you will find multiple file in the folder cypress to run test on specific component.
- The test runner will update automatically on every code change.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
