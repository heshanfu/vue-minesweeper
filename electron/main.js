import { app, BrowserWindow } from 'electron'
import icon from './icons/256x256.png'
import path from 'path'
let mainWindow
const production = process.env.NODE_ENV === 'production'
const winURL = production ? `file://${__dirname}/index.html` : `http://localhost:9080`

function createWindow () {
  mainWindow = new BrowserWindow({
    useContentSize: true,
    title: 'Minesweeper',
    icon: path.join(__dirname, production ? '.' : '../www', icon),
    show: false,
    frame: false,
    resizable: false
  })
  mainWindow.setMenu(null)
  mainWindow.on('closed', () => { mainWindow = null })
  mainWindow.loadURL(winURL)
}

app.on('ready', createWindow)
app.on('window-all-closed', () => (process.platform !== 'darwin') && app.quit())
app.on('activate', () => (mainWindow === null) && createWindow())
