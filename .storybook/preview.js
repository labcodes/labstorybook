import '!style-loader!css-loader!sass-loader!../labsystem/scss/main.scss';
import '!style-loader!css-loader!sass-loader!../.storybook/scss/main.scss';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    method: 'alphabetical',
    storySort: {
      order: ['Getting started', ['Principles', 'Accessibility', 'Setup', 'How to Contribute', 'Changelog'], 'Base', 'Components'],
    },
  },
}
