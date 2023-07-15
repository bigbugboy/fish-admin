const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 禁用语法检查
  lintOnSave: false,
  // 解决开发环境跨域问题
  devServer: {
    // proxy不能写'http://localhost:8000'，很奇怪？
    proxy: 'http://127.0.0.1:8000',
  }
})
