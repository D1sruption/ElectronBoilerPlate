const ipcRenderer = require('electron').ipcRenderer
const app = require('electron').remote.app
const appVersion = require('electron').remote.app.getVersion()
const remote = require('electron').remote

window.$ = window.jQuery = require('jquery')

document.addEventListener('DOMContentLoaded', pageLoaded)
function pageLoaded () {
  // This code will run after the page has been loaded
  $('#titlebar_lblversion').text('v' + appVersion + '-beta')

  // set titlebar functionality
  $('#titlebar_btnclose').click(function () {
    // send close event to main
    app.quit()
    remote.getCurrentWindow().close()
    ipcRenderer.send('quit-app');
  })

  $('#titlebar_btnmin').click(function () {
    remote.BrowserWindow.getFocusedWindow().minimize()
  })
}