const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@stories": path.resolve(__dirname, "src/stories"),
        "@static": path.resolve(__dirname, "static"),
      },
    },
  });
};
