import type { Preview } from "@storybook/react";
import { withRouter } from 'storybook-addon-react-router-v6'

import '../src/App.css';
import i18n from '../src/i18n'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    i18n,
  },
  decorators: [withRouter],
};

export default preview;
