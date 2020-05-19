import { create } from '@storybook/theming/create';

export default create({
  base: 'light',

  colorPrimary: 'hotpink',
  colorSecondary: '#EC6056',

  // UI
  appBg: '#E8F7F7;',
  appBorderColor: 'white',
  appBorderRadius: 0,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#EC6056',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'silver',
  barSelectedColor: 'black',
  barBg: '#EC6056',

  // Form colors
  inputBg: 'white',
  inputBorder: 'white',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'labcodes',
  brandUrl: 'https://labcodes.com.br',
  brandImage: 'slogan-color-2.png',
});
