const path = require("path");

/** @type { import('@storybook/nextjs').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions"
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {}
  },
  docs: {
    autodocs: "tag"
  },
  staticDirs: [path.resolve(__dirname, "../public")],
  webpackFinal: async (config, { configType }) => {
    // path alias
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "../src/")
    };

    // svgr
    const fileLoaderRule = config.module.rules.find(rule => rule.test && rule.test.test(".svg"));
    fileLoaderRule.exclude = /\.svg$/;
    config.module.rules.push({
      test: /\.svg$/,
      enforce: "pre",
      loader: require.resolve("@svgr/webpack")
    });

    return config;
  }
};
export default config;
