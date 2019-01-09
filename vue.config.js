let path = require('path')
let glob = require('glob')
function resolve(dir) {
    console.log(2222)
    console.log(dir);
    return path.join(__dirname, dir)
}
//配置pages多页面获取当前文件夹下的html和js
function getEntry(globPath) {
    let entries = {},
        basename, tmp, pathname, appname;

    glob.sync(globPath).forEach(function(entry) {
        basename = path.basename(entry, path.extname(entry));
        // console.log(entry)
        tmp = entry.split('/').splice(-3);
        console.log(tmp)
        pathname = basename; // 正确输出js和html的路径
        
        // console.log(pathname)
        entries[pathname] = {
            entry:'src/'+tmp[0]+'/'+tmp[1]+'/'+tmp[1]+'.js',
            template:'src/'+tmp[0]+'/'+tmp[1]+'/'+tmp[2],
            filename:tmp[2]
        };
    });
    console.log(entries)
    return entries;
    
}

let htmls = getEntry('./src/pages/**/*.html');
// console.log(htmls)
//配置end

module.exports = {
    baseUrl: '',
    pages:htmls,
    lintOnSave: true, // ture | false | 'error'
    runtimeCompiler: true,
    transpileDependencies: [], // 默认忽略，但是可额外增加例外的依赖包名
    productionSourceMap: true, // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('@a', resolve('src/assets'))
            .set('@c', resolve('src/components'))
            .set('@u', resolve('src/utils'))
            .set('@api', resolve('src/api'));

        config.output.filename('[name].[hash].js').end(); 

        config.module
            .rule('images')
            .use('url-loader')
            .loader('url-loader')
            .tap(options => {
                // 修改它的选项...
                options.limit = 10000
                return options
            })

        const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
        types.forEach(type => addStyleResourceStyus(config.module.rule('stylus').oneOf(type))) // module中不引用stylus就不加载 以提高加载速度
        types.forEach(type => addStyleResourceLess(config.module.rule('less').oneOf(type)))

        
    },
    css: { // 配置高于chainWebpack中关于css loader的配置
        // modules: true, // 是否开启支持‘foo.module.css’样式
        extract: true, // 是否使用css分离插件 ExtractTextPlugin，采用独立样式文件载入，不采用<style>方式内联至html文件中
        sourceMap: false, // 是否在构建样式地图，false将提高构建速度
        loaderOptions: { // css预设器配置项
          css: {
            localIdentName: '[name]-[hash]',
            camelCase: 'only'
          },
          less: {
            // javascriptEnabled: true,
            // @/ 是 src/ 的别名
            // 所以这里假设你有 `src/assets/Styles/base.less` 这个文件
            // data: `@import "./src/assets/Styles/base.less";` // 全局变量
          },
          stylus: {}
        }
    },
    parallel: require('os').cpus().length > 1, // 构建时开启多进程处理babel编译
    devServer: {
        index:'page1.html',//默认启动serve 打开page1页面
        open: process.platform === 'darwin',
        host: '',
        port: 8088,
        https: false,
        hotOnly: false,
        proxy: {
            '/xrf/': {
                target: 'http://reg.tool.hexun.com/',
                changeOrigin: true,
                pathRewrite: {
                    '^/xrf': ''
                }
            },
            '/wa/': {
                target: 'http://api.match.hexun.com/',
                changeOrigin: true,
                pathRewrite: {
                    '^/wa': ''
                }
            }
        }, // 设置代理
        before: app => { }
    }
}
function addStyleResourceStyus (rule) {
    rule.use('style-resource')
      .loader('style-resources-loader')
      .options({
        patterns: [
          path.resolve(__dirname, './src/assets/Styles/base.styl')
        ],
      })
}
function addStyleResourceLess (rule) {
    rule.use('style-resource')
      .loader('style-resources-loader')
      .options({
        patterns: [
          path.resolve(__dirname, './src/assets/Styles/base.less')
        ],
      })
}