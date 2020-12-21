# labstorybook

This project has the main implementations of the Labcodes' (still under development) Confetti design system.

It contains all the documentation and sample components in a storybook-like site.

## Storybook

To set up the storybook, clone the repository, then, with node and npm installed, run `npm install`.

With that done, you'll need to enter the `labsystem` folder (by running `cd labsystem`), and run `npm install` again, since this folder contains the source code for the design system itself. Labsystem is the old name for our design system, and will be changed in the future, along with these docs.

### Running the storybook locally

After setting it up, to run the storybook locally, go to the root folder (the one that contains the `.storybook` folder) and run `npm start`. That will run a development server that runs at http://localhost:8000 and that constains this whole storybook site.

### Running the tests

To manually run the tests, first go into the `labsystem` folder, then run `npm test`. The tests will also be automatically run before any push is made to the Github repository.

### Deploying staging apps

If you have made any changes to the Storybook's or Confetti's source code and want to share it with other people for QA, just push your branch and Netlify will automatically deploy it to https://your-branch-name--labstorybook-master.netlify.app after a few minutes. When it's merged on master, it will be available at the base https://labstorybook-master.netlify.app url.

### Creating new components

If you want to use this Design System to develop your own custom components, check out the template files at `/labsystem/samples`. This is how you can start:

- Copy `SampleComponent.js` to `/labsystem/src` and rename it (and the class name as well);
- Copy `_sample-component.scss` to `/labsystem/scss/components` and rename it;
- Copy `SampleComponent.stories.mdx` to `/stories`, rename it, and fill up its content.

### ESLint

We use ESLint to validate our code before pushing it to our repository. We recommend that you install any ESLint plugins to your preferred code editor, so that it highlights all the errors before you save the files. On VSCode, we use this one: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

## Branching model

We currently use Trunk based development for contributions

[Trunk based](https://trunkbaseddevelopment.com/5-min-overview/) repositories have only one permanent branch: `master`. From it, we can create `feature` and `hotfix` branches.

The only main rule is that `master` should always, **always** stable. For that, be sure to run the tests (details on how to are in the [Setup docs](/?path=/docs/getting-started-setup--page)) before pushing your code and never push with the `--no-validate` flag, unless specifically being asked to.

Let's detail the branches and their roles:

### Feature branches

|Branches off of|Merges on|Naming|
|---|---|---|
|`your-fork:master`|`master`|`feature/[description-of-your-feature]`|

Feature branches are used to develop new features for an upcoming or distant future release. If you're contributing with a feature or with a non-urgent bugfix, this is the type of branch we recommend you to use. They should exist as long as the feature is in development, and, in this case, should be as short-lived as possible. When the feature is done, open the PR for our main codebase, to the master branch, for review. After reviewed, it will at some point be merged back into branch `master`.

### Hotfix branches

|Branches off of|Merges on|Naming|
|---|---|---|
|`your-fork:master`|`master`|`hotfix/[description-of-your-feature]`|

Yes, it's mostly the same kind of branch as the feature ones, but used for emergency purposes. It has a different name, so that we can track on the git history what was a hotfix and what was a feature.

If you're not from Labcodes or is not closely involved with the development of Confetti, we'd recommend never to use this type of branch.

## Styling conventions

In this project, we use our own CSS guidelines, based on a flavor of BEM. Please take some time to read our [guidelines](https://paper.dropbox.com/doc/CSS-Guidelines-ZlPI0Lh6I38ZVFn8yY579) before contributing with CSS code for the UI.
