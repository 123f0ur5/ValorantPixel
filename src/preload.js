const { contextBridge, ipcRenderer } = require('electron');

let indexBridge = {
    saveData : (agent, skill, map, pixelData, newPixel, target, position) => {
        ipcRenderer.send("saveData", agent, skill, map, pixelData, newPixel, target, position);
    }
}

contextBridge.exposeInMainWorld("indexBridge", indexBridge);