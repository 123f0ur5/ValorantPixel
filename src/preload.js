const { contextBridge, ipcRenderer } = require('electron')

let indexBridge = {
    saveData : (agent, map, data) => {
        ipcRenderer.send("saveData", agent, map, data)
    } 
}

contextBridge.exposeInMainWorld("indexBridge", indexBridge);