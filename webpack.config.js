const path = require("path");

module.exports = {
  resolve: {
    alias: {
      "@stories": path.resolve(__dirname, "./src/stories/"),
    },
    extensions: [".js", ".jsx", ".json", "ts", "tsx"],
  },
};
