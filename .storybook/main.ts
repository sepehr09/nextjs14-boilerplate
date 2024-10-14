import { StorybookConfig } from "@storybook/nextjs";
import path from "path"; // Use ES module import for TypeScript compatibility

const config: StorybookConfig = {
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
  docs: {},
  staticDirs: [path.resolve(__dirname, "../public")],
  webpackFinal: async (config, { configType }) => {
    // TypeScript expects a return type, so we specify the config type
    if (!config.resolve) {
      config.resolve = { alias: {} };
    }

    // path alias
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "../src/")
    };

    // svgr
    const fileLoaderRule = config.module?.rules?.find(
      rule => (rule as any).test && (rule as any).test.test(".svg")
    ) as any;

    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/;
    }

    config.module?.rules?.push({
      test: /\.svg$/,
      enforce: "pre",
      loader: require.resolve("@svgr/webpack")
    });

    return config;
  }
};

export default config;
