// .storybook/main.js
module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-viewport",
    "@storybook/addon-knobs",
  ],
  webpackFinal: async (config) => {
    // do mutation to the config

    return config;
  },
};
