require("source-map-support").install();
require("ts-node").register({
  compilerOptions: {
    module: "commonjs",
    target: "es2017",
  },
});

const gatsby = require("./src/gatsby-node");

exports.onCreateWebpackConfig = gatsby.onCreateWebpackConfig;
exports.onCreateBabelConfig = gatsby.onCreateBabelConfig;
exports.createPages = gatsby.createPages;
exports.onCreateNode = gatsby.onCreateNode;
