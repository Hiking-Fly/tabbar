const { resolve } = require("core-js/fn/promise");
// 这里的webpack配置会和公共的webpack.config.js进行合并
module.exports = {
    configureWebpack: { // 别名配置
      resolve: {
        alias: {
          'assets':'@/assets',
          'components':'@/components',
          'views':'@/views'
        }
      }
    }
}