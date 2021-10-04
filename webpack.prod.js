const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  // 1
  // Use the src/index.js file as entry point to bundle it.
  // If the src/index.js file imports other JS files,
  // bundle them as well
  entry: path.resolve(__dirname, './src/index.ts'),
  // 2
  // The bundles source code files shall result in a bundle.js file
  // in the /dist folder
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  // 3
  // The /dist folder will be used to serve our application
  // to the browser
  devServer: {
    static: path.resolve(__dirname, './dist'),
  },
// 4
  // Add plugins for webpack here
    plugins: [
    new HtmlWebpackPlugin({
      title: "Basic Webpack Setup",
      template: path.resolve(__dirname, './src/index.html'),
    }),
  ],
module: {
    // configuration regarding modules
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/, // files to exclude
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.(scss|css)$/,  // load files that end with scss and css
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      }
    ]
  },
  resolve: {
    // options for resolving module requests
    extensions: ['*', '.ts', '.js']  // files to load
  }
};