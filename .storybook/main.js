const path = require('path');

module.exports = {
  stories: ['../components/**/*.stories.tsx', '../stories/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-docs',
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5"
  },
  features: {
    emotionAlias: false
  },
  staticDirs: ['../public'],
  webpackFinal: config => {
    config.resolve.modules = [...(config.resolve.modules || []), path.resolve(__dirname, 'components')];
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../')
    };
    return config;
  },
}