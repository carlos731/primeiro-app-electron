const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
    ping: () => ipcRenderer.invoke("ping"),
    getName: (nome) => ipcRenderer.invoke("username", nome)
});