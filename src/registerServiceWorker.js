/**
 * @fileOverview vue脚手架命令服务入口
 * @modifyOverview 增加命令包装：serve时支持模块启动；build时必须指定一个存在的应用名
 * @path node_modules/@vue/cli-service/bin/vue-cli-service.js
 */
const semver = require('semver')
const { error } = require('@vue/cli-shared-utils')
const requiredVersion = require('../package.json').engines.node
if (!semver.satisfies(process.version, requiredVersion)) {
  error(
    `You are using Node ${process.version}, but vue-cli-service ` +
    `requires Node ${requiredVersion}.\nPlease upgrade your Node version.`
  )
  process.exit(1)
}
const [Service, AppConf] = [
  require('../lib/Service'),
  require('../../../../src/assets/js/lib/apps_config_class')
]
let rawArgv = process.argv.slice(2)
const [appconf, newArgv] = [
  new AppConf(),
  process.argv.slice(3)
]
if (rawArgv[0] === 'serve' && rawArgv.length !== 1 && !appconf.modulesExist(newArgv)) {
  console.log('ERR! 存在错误模块名参数，可启动模块:', ...appconf.modules)
  return false
} else if (rawArgv[0] === 'build' && (rawArgv.length === 1 || newArgv.length > 1 || !appconf.appsExist(newArgv))) {
  console.log('ERR! 缺少应用名参数 或 存在错误应用名参数，可构建应用:', ...appconf.apps)
  return false
} else {
  rawArgv = rawArgv.filter(key => !newArgv.includes(key))
}
const service = new Service(process.env.VUE_CLI_CONTEXT || process.cwd())
const args = require('minimist')(rawArgv)
const command = args._[0]
service.run(command, args, rawArgv).catch(err => {
  error(err)
  process.exit(1)
})