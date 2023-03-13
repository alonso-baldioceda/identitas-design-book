const path = require("path");
const { TsconfigPathsPlugin } = require("tsconfig-paths-webpack-plugin");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-links",
    "storybook-addon-grid",
  ],
  plugins: ["inline-react-svg"],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
  features: {
    interactionsDebugger: true,
  },
  webpackFinal: async (config) => {
    // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
    config.module.rules[0].exclude = [
      /node_modules\/(?!(gatsby|gatsby-script)\/)/,
    ];

    // Remove core-js to prevent issues with Storybook
    config.module.rules[0].exclude = [/core-js/];
    // Use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
    config.module.rules[0].use[0].options.plugins.push(
      require.resolve("babel-plugin-remove-graphql-queries")
    );

    config.resolve.plugins = [
      new TsconfigPathsPlugin({ extensions: config.resolve.extensions }),
    ];

    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, "../"),
    ];

    config.resolve.alias = {
      ...config.resolve.alias,
      "@stories": path.resolve(__dirname, "../src/stories"),
    };

    config.resolve.mainFields = ["browser", "module", "main"];

    config.resolve.mainFields = ["browser", "module", "main"];

    // config.resolve.plugins = [
    //   new TsconfigPathsPlugin({ extensions: config.resolve.extensions }),
    // ];

    // config.resolve.plugins.push(
    //   new TsconfigPathsPlugin({
    //     configFile: "./../tsconfig.json",
    //   })
    // );

    return config;
  },
  babel: async (options) => {
    options.plugins.push("babel-plugin-inline-react-svg");
    return options;
  },
};
