exports.id = "main";
exports.modules = {

/***/ "./electron/main.js":
/*!**************************!*\
  !*** ./electron/main.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ "electron");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons_256x256_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/256x256.png */ "./electron/icons/256x256.png");
/* harmony import */ var _icons_256x256_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_icons_256x256_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);



let mainWindow
const production = "development" === 'production'
const winURL = production ? `file://${__dirname}/index.html` : `http://localhost:9080`

function createWindow () {
  mainWindow = new electron__WEBPACK_IMPORTED_MODULE_0__["BrowserWindow"]({
    useContentSize: true,
    title: 'Minesweeper',
    icon: path__WEBPACK_IMPORTED_MODULE_2___default.a.join(__dirname, production ? '.' : '../www', _icons_256x256_png__WEBPACK_IMPORTED_MODULE_1___default.a),
    show: false,
    frame: false,
    resizable: false
  })
  mainWindow.setMenu(null)
  mainWindow.on('closed', () => {
    console.log('closed')
    mainWindow = null
  })
  mainWindow.loadURL(winURL)
}

electron__WEBPACK_IMPORTED_MODULE_0__["app"].on('ready', createWindow)
// app.on('window-all-closed', () => (process.platform !== 'darwin') && app.quit())
electron__WEBPACK_IMPORTED_MODULE_0__["app"].on('activate', () => (mainWindow === null) && createWindow())


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9lbGVjdHJvbi9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkM7QUFDUDtBQUNmO0FBQ3ZCO0FBQ0EsbUJBQW1CLGFBQW9CO0FBQ3ZDLHNDQUFzQyxVQUFVOztBQUVoRDtBQUNBLG1CQUFtQixzREFBYTtBQUNoQztBQUNBO0FBQ0EsVUFBVSwyQ0FBSSw4Q0FBOEMseURBQUk7QUFDaEU7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUEsNENBQUc7QUFDSDtBQUNBLDRDQUFHIiwiZmlsZSI6Im1haW4uMmUwYzczMWRkYjE2OTUzYzQzMjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFwcCwgQnJvd3NlcldpbmRvdyB9IGZyb20gJ2VsZWN0cm9uJ1xyXG5pbXBvcnQgaWNvbiBmcm9tICcuL2ljb25zLzI1NngyNTYucG5nJ1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xyXG5sZXQgbWFpbldpbmRvd1xyXG5jb25zdCBwcm9kdWN0aW9uID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xyXG5jb25zdCB3aW5VUkwgPSBwcm9kdWN0aW9uID8gYGZpbGU6Ly8ke19fZGlybmFtZX0vaW5kZXguaHRtbGAgOiBgaHR0cDovL2xvY2FsaG9zdDo5MDgwYFxyXG5cclxuZnVuY3Rpb24gY3JlYXRlV2luZG93ICgpIHtcclxuICBtYWluV2luZG93ID0gbmV3IEJyb3dzZXJXaW5kb3coe1xyXG4gICAgdXNlQ29udGVudFNpemU6IHRydWUsXHJcbiAgICB0aXRsZTogJ01pbmVzd2VlcGVyJyxcclxuICAgIGljb246IHBhdGguam9pbihfX2Rpcm5hbWUsIHByb2R1Y3Rpb24gPyAnLicgOiAnLi4vd3d3JywgaWNvbiksXHJcbiAgICBzaG93OiBmYWxzZSxcclxuICAgIGZyYW1lOiBmYWxzZSxcclxuICAgIHJlc2l6YWJsZTogZmFsc2VcclxuICB9KVxyXG4gIG1haW5XaW5kb3cuc2V0TWVudShudWxsKVxyXG4gIG1haW5XaW5kb3cub24oJ2Nsb3NlZCcsICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdjbG9zZWQnKVxyXG4gICAgbWFpbldpbmRvdyA9IG51bGxcclxuICB9KVxyXG4gIG1haW5XaW5kb3cubG9hZFVSTCh3aW5VUkwpXHJcbn1cclxuXHJcbmFwcC5vbigncmVhZHknLCBjcmVhdGVXaW5kb3cpXHJcbi8vIGFwcC5vbignd2luZG93LWFsbC1jbG9zZWQnLCAoKSA9PiAocHJvY2Vzcy5wbGF0Zm9ybSAhPT0gJ2RhcndpbicpICYmIGFwcC5xdWl0KCkpXHJcbmFwcC5vbignYWN0aXZhdGUnLCAoKSA9PiAobWFpbldpbmRvdyA9PT0gbnVsbCkgJiYgY3JlYXRlV2luZG93KCkpXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=