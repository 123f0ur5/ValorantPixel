const { app, BrowserWindow, ipcMain } = require('electron');
const path = require("path");
var fs = require("fs");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    resizable: false,
    webPreferences: {
      contextIsolation : true,
      nodeIntegration : true,
      preload: path.resolve('./src/preload.js'),
    },
  });

  win.loadFile('src/index.html');
};

ipcMain.on("saveData", (e, agent, map, skill, data) => {
    console.log(e, agent, map, skill, data)
    fs.writeFile(path.resolve(`./pixel/${agent}-${map}-${skill}.json`), JSON.stringify(data), (err) =>{
    if (!err) {
      console.log(data)
    } else {
      console.log(err)
    }
  })
});

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});