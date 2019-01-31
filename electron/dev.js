const electron = require('electron')
const path = require('path')
const { spawn } = require('child_process')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const webpackHotMiddleware = require('webpack-hot-middleware')
function Deferred () { this.promise = new Promise((resolve, reject) => Object.assign(this, { resolve, reject })) }

const [ mainConfig, rendererConfig ] = require('./webpack.config')(null, { mode: 'development' })

async function startRenderer () {
  const compiler = webpack(rendererConfig)
  const hotMiddleware = webpackHotMiddleware(compiler, { log: false, heartbeat: 2500 })

  const deferred = new Deferred()
  const server = new WebpackDevServer(compiler, {
    contentBase: path.join(__dirname, '../www'),
    before (app) {
      app.use(hotMiddleware)
      deferred.resolve()
    }
  })
  server.listen(9080)
  await deferred.promise
}

async function startMain () {
  const compiler = webpack(mainConfig)
  const deferred = new Deferred()
  compiler.run((err, stats) => {
    if (err) {
      console.log(err)
      return process.exit()
    }
    console.log(stats.toString({ colors: true }))
    deferred.resolve()
  })
  await deferred.promise
}

function startElectron () {
  const args = [ '--inspect=5858', path.join(__dirname, '../www/main.js'), ...process.argv.slice(2) ]
  const electronProcess = spawn(electron, args)
  electronProcess.stdout.on('data', data => console.log(data.toString()))
  electronProcess.stderr.on('data', data => console.log(data.toString()))
  electronProcess.on('close', () => process.exit())
}

async function init () {
  await Promise.all([startRenderer(), startMain()])
  startElectron()
}

init().catch(err => console.error(err))
