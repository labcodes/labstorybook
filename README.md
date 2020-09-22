# labstorybook

This project has the main implementations of the Labcodes' (still under development) design system.

It contains all the documentation and sample components in a storybook-like page.

### Installing

To install this project, be sure to have the correct node/npm installed (currently 12.14.0/6.13.4). Though we support npm, we prefer using yarn (1.21.1).

To install yarn, you may run `npm i -g yarn`. Then, to install the dependencies, run `yarn` on the root folder **and** on the labsystem folder, then you're good to go.

### Running and deploying

After installing the dependencies, you may run the project with `yarn start` or `npm start`. It will run a local server on the `http://localhost:8000` address.

If you want to deploy it, we have everything set up to deploy it to github pages. Just run `yarn deploy` or `npm run deploy` and a compiled version will be pushed to the `gh-pages` branch of your origin repository, which is all that's needed for you to be able to access it via the `https://your-github-username.github.io/your-repository-name`.

## Testing

To execute the test suit go to the `labsystem` directory, then run `npm test`.

### ESLint

We use ESLint to validate our code before pushing it to our repository. We recommend that you install any ESLint plugins to your preferred code editor, so that it highlights all the errors before you save the files. On VSCode, we use this one: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

### Licensing

This project is a fork from [lucianoratamero/storybook-ghpages-template](https://github.com/lucianoratamero/storybook-ghpages-template), licensed under the MIT License.
