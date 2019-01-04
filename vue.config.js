
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
    transpileDependencies: [],
    productionSourceMap: true, 
    configureWebpack: config => {
        //入口文件
        // config.entry.app = ['babel-polyfill', './src/main.js'];
        let plugins = [
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: {
                        warnings: false,
                        drop_console:true,
                        drop_debugger:true
                    },
                    output:{
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
            config.plugins = [...config.plugins, ...plugins];
            // config.module
            // .rule('vue')
            // .use('vue-loader')
            //   .loader('vue-loader')
            //   .tap(options => {
            //     return options
            //   })

            // config.module
            // .rule('graphql')
            // .test(/\.graphql$/)
            // .use('graphql-tag/loader')
            //   .loader('graphql-tag/loader')
            //   .end()
            // const svgRule = config.module.rule('svg')
            // svgRule.uses.clear()

            // svgRule
            //   .use('vue-svg-loader')
            //     .loader('vue-svg-loader')
        }
    },
    chainWebpack: config => { 
        config.resolve.alias
            .set('@', resolve('src'))
            .set('@a', resolve('src/assets'))
            .set('@c', resolve('src/components'))
            .set('@u', resolve('src/utils'))
            .set('@api', resolve('src/api'));

        config.output.filename('[name].[hash].js').end(); 
 
        config.module
            .rule("vue")
            .use("vue-loader")
            .loader("vue-loader")
            .tap(options => {
                options.compilerOptions.preserveWhitespace = true;
                return options;
            });
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
        // types.forEach(type => addStyleResourceStyus(config.module.rule('stylus').oneOf(type))) 
        types.forEach(type => addStyleResourceLess(config.module.rule('less').oneOf(type)))
        if (debug) {
            // 本地开发配置
        } else {
            // 生产开发配置
        }
    },
    css: { 
        extract: true,
        sourceMap: false,
        loaderOptions: {
            css: {
                localIdentName: '[name]-[hash]',
                camelCase: 'only'
            },
            less: {
                javascriptEnabled: true
            },
            stylus: {}
        }
    },
    parallel: require('os').cpus().length > 1, 
    pluginOptions: { 
        // 'style-resources-loader': {
        //   preProcessor: 'less',
        //   patterns: [
        //       path.resolve(__dirname, "./src/assets/Styles/style.less")
        //   ]
        // }
    },
    pwa: { 
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