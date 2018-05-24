const PATHS = require('../paths');

module.exports = ({ limit = 10000 } = {}) => ({
  test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
  loader: 'url-loader',
  options: { name: '[hash].[ext]', limit },
  include: [PATHS.app, PATHS.modules],
});
