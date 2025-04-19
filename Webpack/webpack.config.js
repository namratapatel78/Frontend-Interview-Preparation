const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // Entry point of the app
  output: {
    path: path.resolve(__dirname, "dist"), // Output directory
    filename: "bundle.js", // Bundled file name
    clean: true, // Cleans the output directory before build
  },
  mode: "development", // Can be "development" or "production"
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Files to be processed by Babel
        exclude: /node_modules/, // Do not process files present in this directory
        use: {
          loader: "babel-loader", // Babel is a JavaScript compiler that converts modern JavaScript (ES6+, JSX, TypeScript) into backward-compatible JavaScript that can run in older browsers.
          options: {
            presets: [
              "@babel/preset-env", // for ES6+
              "@babel/preset-react", // for JSX
              "@babel/preset-typescript"],
          },
        },
      },
      {
        test: /\.css$/, // Handles CSS files
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/, // Handles images
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // Allow importing files without extensions
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  devServer: {
    static: "./dist",
    hot: true,
    port: 3000,
    historyApiFallback: true, // Enables React Router support
  },
};

// Key Components of Webpack Configuration

// Entry: Specifies the starting point of the React app (index.js).

// Output: Bundles files into the dist folder. Generates a bundle.js file.

// Mode:
// "development" enables faster builds and source maps.
// "production" enables optimizations like minification.

// Module Rules:

// Babel Loader: Transpiles modern JavaScript (JSX & ES6) to browser-compatible JavaScript.
// CSS Loader: Loads CSS files.
// Style Loader: Injects CSS into the DOM.
// Asset Modules: Handles images and other static assets.

// Plugins:
// HtmlWebpackPlugin: Injects the JavaScript bundle into index.html.

// DevServer:
// Enables hot module replacement (HMR).
// Runs the dev server on port 3000.
// Supports React Router (avoids 404 errors on refresh).