import { addons } from '@storybook/addons';
import labcodesDesignSystem from './labcodesDesignSystem';
import '!style-loader!css-loader!sass-loader!./theme/main.scss';

addons.setConfig({
  theme: labcodesDesignSystem,
});
