const WebpackNotifierPlugin = require('webpack-notifier');
const purgeCSS = require('@fullhuman/postcss-purgecss');
const cssHasPseudo = require('css-has-pseudo');

const path = require('path');


module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [{
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              indent: 'postcss',
              plugins: [
                require('postcss-short')(),
                cssHasPseudo()
              ]
            }
          }
        }]
      }
    ]
  },
}
