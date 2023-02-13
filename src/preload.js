const { contextBridge, ipcRenderer } = require('electron')

let indexBridge = {
    saveData : (agent, map, skill, data) => {
        ipcRenderer.send("saveData", agent, map, skill, data)
    } 
}

contextBridge.exposeInMainWorld("indexBridge", indexBridge);