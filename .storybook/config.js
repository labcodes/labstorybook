import { configure } from '@storybook/react';

import '!style-loader!css-loader!sass-loader!../labsystem/scss/main.scss';

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.(js|mdx)$/), module);
