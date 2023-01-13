const cssHasPseudo = require('css-has-pseudo');

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
              syntax: 'postcss-scss',
              plugins: [
                require('postcss-short')(),
                cssHasPseudo()
              ]
            }
          }
        }],
      }
    ]
  },
};
