const { app, BrowserWindow } = require('electron')
const path = require("node:path");

function createWindow(){
    const win = new BrowserWindow({
        width: 800,
        height: 800,
        webPreferences:{
            preload: path.join(__dirname, "preload.js")
        }
    })

    win.loadFile("index.html");
}

app.whenReady().then(() => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().lenth === 0) {
            createWindow();
        }
    })
})

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
})