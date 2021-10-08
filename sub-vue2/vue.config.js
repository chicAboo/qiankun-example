const { name } = require('../package.json')

module.exports = {
  // publicPath: '/subapp/sub-vue',
  chainWebpack: (config) => config.resolve.symlinks(false),
  configureWebpack: {
    output: {
      // 把子应用打包成 umd 库格式
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
  devServer: {
    port: 7001,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
}
