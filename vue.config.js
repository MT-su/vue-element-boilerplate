const path = require('path')
const {
  PROJECT_NAME,
  PUBLIC_PATH,
  OUTPUT_DIR,
  ASSETS_DIR,
  PORT
} = process.env

let proxyTarget = 'http://localhost:8000'
// console.log('正在使用' + proxyTarget + '代理')

// 文件位置设置别名
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // 静态资源域名
  publicPath: PUBLIC_PATH === '/' ? PUBLIC_PATH : PUBLIC_PATH + PROJECT_NAME,

  // 打包后文件目录
  outputDir: OUTPUT_DIR,

  // 打包后静态文件目录
  assetsDir: ASSETS_DIR,

  // 打包后静态文件名是否包含哈希值
  filenameHashing: false,

  // source map
  productionSourceMap: false,

  configureWebpack: {
    optimization: {
      runtimeChunk: {
        name: 'runtime'
      }
    },
    resolve: {
      extensions: ['.js', '.vue'], // 免写后缀名的文件类型
      alias: {
        '@': resolve('src'),
        'src': resolve('src'),
        'assets': resolve('src/assets'),
        'config': resolve('src/config'),
        'lib': resolve('src/lib')
      }
    }
  },

  // chainWebpack: config => {
  //   // 删除prefetch preload插件去除打包后文件预加载
  //   config.plugins.delete('prefetch')
  //   config.plugins.delete('preload')
  // },

  //  lint 错误在开发时直接显示在浏览器中
  lintOnSave: 'error', // default false

  devServer: {
    // index: 'admin.html',
    port: PORT,
    proxy: { // 设置代理，用来解决本地开发跨域问题，如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
      '/api': {
        target: proxyTarget,
        changeOrigin: true // 跨域
      }
    }
  },
  pages: {
    admin: {
      entry: 'src/entry/admin/index.js',
      filename: 'admin.html',
      title: 'Index Page',
      chunks: ['chunk-vendors', 'chunk-common', 'runtime', 'admin']
    },
    blog: {
      entry: 'src/entry/blog/index.js',
      filename: 'blog.html',
      title: 'Index Page',
      chunks: ['chunk-vendors', 'chunk-common', 'runtime', 'blog']
    }

  }
}
