
const electronDebug = require('electron-debug')
const electron = require('electron')
electronDebug({ showDevTools: true })

const { default: installExtension, VUEJS_DEVTOOLS } = require('electron-devtools-installer')

electron.app.on('ready', async function () {
  await installExtension(VUEJS_DEVTOOLS).catch(err => {
    console.log('Unable to install `vue-devtools`: \n', err)
  })
})
require('./main')
