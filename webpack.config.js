const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { resolve: resolvePath, relative: pathRelative } = require('path');
const fromProject = path => resolvePath(__dirname, path)


const cssPlugins = [
  new ExtractTextPlugin('kuic.css')
];

module.exports = {
  entry: {
    'react-kuic': fromProject('src/components/Badge/Badge.js')
  },
  output: {
    path: fromProject('lib'),
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        use: ['css-loader', 'postcss-loader']
      })
    },
    {
      test: /\.js$/,
      exclude: [/node_modules/],
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['babel-preset-es2015', 'babel-preset-es2016', 'babel-preset-es2017', 'babel-preset-stage-0', 'babel-preset-react']
        },
      }],
    }
    ]
  },
  plugins: [
    ...cssPlugins,
  ]
};
