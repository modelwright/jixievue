
const path = require('path')
const debug = process.env.NODE_ENV !== 'production'
function resolve(dir) {
  console.log(111111111111)
  console.log(dir);
  return path.join(__dirname, dir)
}
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const VueConf = require('./src/assets/js/lib/vue_config_class')
const vueConf = new VueConf(process.argv)

console.log('')
console.log('本地启动或构建的文件信息 | 开始--------------------------------------------------------------')
console.log(process.argv);
console.log(vueConf.pages)
console.log('本地启动或构建的文件信息 | 结束--------------------------------------------------------------')
console.log('')

module.exports = {
  // baseUrl: process.env.NODE_ENV === 'production'
  //   ? '/my-app/'
  //   : '/',
  baseUrl: vueConf.baseUrl,
  outputDir: 'dist',
  assetsDir: 'assets',
  pages: vueConf.pages,
  lintOnSave: true, // ture | false | 'error'
  runtimeCompiler: true,
  transpileDependencies: [], // 默认忽略，但是可额外增加例外的依赖包名
  productionSourceMap: true, // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
  configureWebpack: config => {
    //入口文件
    // config.entry.app = ['babel-polyfill', './src/main.js'];
    //删除console插件
    let plugins = [
        new UglifyJsPlugin({
            uglifyOptions: {
                compress: {
                    warnings: false,
                    drop_console:true,
                    drop_debugger:true
                },
                output:{
                    // 去掉注释内容
                    comments: false,
                }
            },
            sourceMap: false,
            parallel: true,
        })
    ];
    if (debug) {
        // 开发环境配置
        config.devtool = 'cheap-module-eval-source-map'
    } else {
        // 生产环境配置
        //只有打包生产环境才需要将console删除
        config.plugins = [...config.plugins, ...plugins];
        // 以下为链式操作引入loader(不建议)
        // config.module
        // .rule('vue')
        // .use('vue-loader')
        //   .loader('vue-loader')
        //   .tap(options => {
        //     // 修改它的选项...
        //     return options
        //   })

        //添加新的loader
        // config.module
        // .rule('graphql')
        // .test(/\.graphql$/)
        // .use('graphql-tag/loader')
        //   .loader('graphql-tag/loader')
        //   .end()
        // 替换一个规则里的 Loader
        // const svgRule = config.module.rule('svg')
        // // 清除已有的所有 loader。
        // // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
        // svgRule.uses.clear()

        // // 添加要替换的 loader
        // svgRule
        //   .use('vue-svg-loader')
        //     .loader('vue-svg-loader')
    }
},
//允许对内部的 webpack 配置进行更细粒度的修改。webpack-chain
chainWebpack: config => { //webpack链接API，用于生成和修改webapck配置 链式操作修改webpack规则
    // 链式修改
    config.resolve.alias
        .set('@', resolve('src'))
        .set('@a', resolve('src/assets'))
        .set('@c', resolve('src/components'))
        .set('@u', resolve('src/utils'))
        .set('@api', resolve('src/api'));

    // 打包文件带hash
    config.output.filename('[name].[hash].js').end(); 

    // 为了补删除换行而加的配置 
    config.module
        .rule("vue")
        .use("vue-loader")
        .loader("vue-loader")
        .tap(options => {
            options.compilerOptions.preserveWhitespace = true;
            return options;
        });
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    // types.forEach(type => addStyleResourceStyus(config.module.rule('stylus').oneOf(type))) // module中不引用stylus就不加载 以提高加载速度
    types.forEach(type => addStyleResourceLess(config.module.rule('less').oneOf(type)))
    if (debug) {
        // 本地开发配置
    } else {
        // 生产开发配置
    }
},
css: { // 配置高于chainWebpack中关于css loader的配置
    extract: true, // 是否使用css分离插件 ExtractTextPlugin，采用独立样式文件载入，不采用<style>方式内联至html文件中
    sourceMap: false, // 是否在构建样式地图，false将提高构建速度
    loaderOptions: { // css预设器配置项
        css: {
            localIdentName: '[name]-[hash]',
            camelCase: 'only'
        },
        less: {
            javascriptEnabled: true
            // @/ 是 src/ 的别名
            // 所以这里假设你有 `src/assets/Styles/base.less` 这个文件
            // data: `@import "@/assets/Styles/base.less";` // 全局变量
        },
        stylus: {}
    }
},
parallel: require('os').cpus().length > 1, // 构建时开启多进程处理babel编译
pluginOptions: { // 第三方插件配置
    // 'style-resources-loader': {
    //   preProcessor: 'less',
    //   patterns: [
    //       path.resolve(__dirname, "./src/assets/Styles/base.less")
    //   ]
    // }
},
pwa: { // 单页插件相关配置 https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    // name: 'vuebase',
    // themeColor: '#4DBA87',
    // msTileColor: '#000000',
    // appleMobileWebAppCapable: 'yes',
    // appleMobileWebAppStatusBarStyle: 'black',
    // workboxPluginMode: 'InjectManifest',
    // workboxOptions: {
    //   swSrc: 'dev/sw.js',
    // }
},
devServer: {
    open: true,
    host: '0.0.0.0',
    port: 8888,
    https: false,
    hotOnly: false,
    proxy: {
        '/api': {
            target: '<url>',
            ws: true,
            changOrigin: true
        }
    },
    before: app => {}
}
}
function addStyleResourceStyus (rule) {
console.log(1111111111111);
console.log()
rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
        patterns: [
            path.resolve(__dirname, './src/assets/Styles/base.styl')
        ],
    })
}
function addStyleResourceLess (rule) {
console.log(1111111111111);
rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
        patterns: [
            path.resolve(__dirname, './src/assets/Styles/base.less')
        ],
    })
}