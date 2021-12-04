const webpack = require('webpack')

module.exports = {
  lintOnSave: false,
  publicPath: "./",
  chainWebpack: config => {
    config.plugin('provide').use(webpack.ProvidePlugin, [{
      $: 'jquery',
      jquery: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }])
    config.module
      .rule('css')
      .test(/\.css$/)
      .oneOf('vue')
      .resourceQuery(/\?vue/)
      .use('px2rem')
      .loader('px2rem-loader')
      .options({
        remUnit: 192   //代表的是 1rem = ？px  这里假设设计稿是 1920px ，那么这里的比例就是 1/10
      })
      .end()
  }
}