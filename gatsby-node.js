require("source-map-support").install();
require("ts-node");

const gatsby = require("./src/gatsby-node");

exports.onCreateWebpackConfig = gatsby.onCreateWebpackConfig;
exports.onCreateBabelConfig = gatsby.onCreateBabelConfig;
exports.createPages = gatsby.createPages;
exports.onCreateNode = gatsby.onCreateNode;
