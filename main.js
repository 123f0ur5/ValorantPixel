const { app, BrowserWindow, ipcMain } = require('electron');
const path = require("path");
var {dialog} = require("electron");
var fs = require("fs");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 801,
    height: 600,
    autoHideMenuBar: true,
    resizable: false,
    webPreferences: {
      contextIsolation : true,
      nodeIntegration : true,
      preload: path.resolve('./src/preload.js'),
    },
  });

  win.loadFile('src/index.html');
};

ipcMain.on("saveData", (e, agent, skill, map, pixelData, newPixel, target, position) => {
    dialog.showOpenDialog({
      properties : ['openFile']
    }).then(file => {
      let newData;
      let dict = {[newPixel] : [target, position, file.filePaths]}; //Data from the new pixel
      data = pixelData[skill]["map"][map]; //get pixel data from selected map
      let tempDict = Object.assign({}, dict, data); //Put together new pixel with older pixels
      pixelData[skill]["map"][map] = tempDict; //Add this data into the dict, with the nem pixel
      newData = pixelData;
      fs.writeFile(path.resolve(`./pixel/${agent}.json`), JSON.stringify(newData), (err) =>{
        if (err) {
          console.log(err);
        }
      });  
});
});

ipcMain.on("save-video", function(e){
  
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