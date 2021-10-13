module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias.set('@', resolve('src'))
  },
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = 'qiankun-example'
      return args
    })
  },
  devServer: {
    port: 7000,
  },
}
