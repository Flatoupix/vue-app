module.exports = {
  filenameHashing: false,
  publicPath: "",
  outputDir: "build",
  //productionSourceMap: false,
  configureWebpack: {
    devtool: "source-map"
  },
  devServer: {
    // proxy: "http://host/"
  }
};
