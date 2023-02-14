const { contextBridge, ipcRenderer } = require('electron')

let indexBridge = {
    saveData : (agent, data) => {
        ipcRenderer.send("saveData", agent, data)
    } 
}

contextBridge.exposeInMainWorld("indexBridge", indexBridge);