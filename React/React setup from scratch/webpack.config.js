const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js", // tells Webpack where our application starts and where to start bundling our files
  mode: "development", // working in development mode
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader", // direct Webpack to use Babel
        options: { presets: ["@babel/env"] } // use env preset
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"] // css-loader requires style-loader
      }
    ]
  },
  // The resolve property allows us to specify which extensions Webpack will resolve.
  // This allows us to import modules without needing to add their extensions.
  resolve: { extensions: ["*", ".js", ".jsx"] },
  // output property - tells Webpack where to put our bundled code
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/", // specifies what directory the bundle should go in
                          // also tells webpack-dev-server where to serve files from
    filename: "bundle.js"
  },
  devServer: { // webpack-dev-server
    contentBase: path.join(__dirname, "public/"),
    port: 3000, //port we want to run the server on
    publicPath: "http://localhost:3000/dist/", //  tells the server where our bundled code is.
    hotOnly: true
  },
  // since we we are using Hot Module Replacement so we don’t have to constantly refresh to see our changes
  plugins: [new webpack.HotModuleReplacementPlugin()]
};