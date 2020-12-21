import '!style-loader!css-loader!sass-loader!../labsystem/scss/main.scss';
import '!style-loader!css-loader!sass-loader!../.storybook/scss/main.scss';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    method: 'alphabetical',
    storySort: {
      order: ['Getting started', 'Base', ['Principles', 'Accessibility', 'Changelog'], 'Components'],
    },
  },
}
