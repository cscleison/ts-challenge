const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  resolve: { extensions: [".ts"] },
  module: {
    rules: [{ test: /\.ts$/, loader: "ts-loader" }]
  }
};
