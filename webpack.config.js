const isProd = process.env.ENV === 'prod'
const path = require('path')

const libraryName = 'vue-i18n-directives'
const projectRoot = path.resolve(__dirname, '/')
const outputFile = isProd ? `${libraryName}.min.js` : `${libraryName}.js`

const config = {
  entry: `${__dirname}/src/index.js`,

  devtool: isProd ? 'source-map' : false,

  output: {
    path: `${__dirname}/dist`,
    filename: outputFile,
    library: 'VueI18nDirectives',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        include: projectRoot,
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: projectRoot,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
}

module.exports = config
