const path = require("path");

module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule("stylus")
      .use("style-resource")
      .loader("style-resources-loader")
      .options({
        patterns: [path.resolve(__dirname, "./src/styles/imports.styl")],
      });
  },
  devServer: {
    disableHostCheck: true,
  },
};
