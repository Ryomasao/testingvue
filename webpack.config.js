const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ]
  },
  plugins: [
    // 動画で使っているvue-loaderより新しいvue-loaderはpluginの定義が必須みたい
    new VueLoaderPlugin()
  ]
};