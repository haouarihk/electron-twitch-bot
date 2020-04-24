const { app, BrowserWindow, screen } = require("electron")



function createWindow() {
    let displays = screen.getAllDisplays()
    let width;
    for (var i in displays) {
        width += displays[i].bounds.width;
    }
    let win = new BrowserWindow({
        width: 420,
        height: 1000,
        x: width - 600,
        y: 0,
        resizable: false,
        webPreferences: { nodeIntegration: true },
        alwaysOnTop: true,
        darkTheme: true
    })
    win.loadFile('./index.html')
    win.setAlwaysOnTop(true, "floating");
    win.setMenu(null);
    //win.webContents.openDevTools()
}
app.whenReady().then(createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
})



app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }


})