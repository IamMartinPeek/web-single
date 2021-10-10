const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackObfuscator = require('webpack-obfuscator');

module.exports = {
  mode: 'production',
  // 1
  // Use the src/index.js file as entry point to bundle it.
  // If the src/index.js file imports other JS files,
  // bundle them as well
  entry: {
    index: [path.resolve(__dirname, './src/index.ts')],
  },
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
      title: 'Random',
      template: path.resolve(__dirname, './src/index.html'),
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      title: 'Random About',
      template: path.resolve(__dirname, './src/about/about.html'),
      filename: 'about.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Random Content',
      template: path.resolve(__dirname, './src/contents/contents.html'),
      filename: 'contents.html',
    }),
    new WebpackObfuscator({
      rotateStringArray: true,
    }),
  ],
module: {
    // configuration regarding modules
    rules: [
      {
        test: /\.js$/i,
        include: path.resolve(__dirname, 'src'),
        use: [
          'eslint-loader',
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
      {
        test: /\.(scss|css)$/i,
        include: path.resolve(__dirname, 'src'),
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.js$/,
        enforce: 'post',
        use: {
          loader: WebpackObfuscator.loader,
          options: {
            rotateStringArray: true,
          },
        },
      },
    ]
  },
  resolve: {
    // options for resolving module requests
    extensions: ['.tsx', '.ts', '.js']  // files to load
  }
};