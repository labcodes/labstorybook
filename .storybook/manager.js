import { addons } from '@storybook/addons';
import labcodesDesignSystem from './labcodesDesignSystem';
import '!style-loader!css-loader!sass-loader!../theme/main.scss';
import corujaWatch from './coruja';
import elements from './corujaElements.json';

addons.setConfig({
  theme: labcodesDesignSystem,
});

corujaWatch(elements);
