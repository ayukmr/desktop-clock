const { app, BrowserWindow, Menu } = require('electron');

app.dock.hide();

const menu = Menu.buildFromTemplate([{
  label: app.name,
  submenu: [
    { role: 'about' },
    { type: 'separator' },
    { role: 'hide' },
    { role: 'unhide' },
    { type: 'separator' },
    { role: 'quit' }
  ]
}]);

Menu.setApplicationMenu(menu);

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 125,
    height: 125,
    transparent: true,
    frame: false,
    resizable: false,
    roundedCorners: false,
    webPreferences: {
      devTools: false
    }
  });

  mainWindow.setAlwaysOnTop(true, 'screen-saver');
  mainWindow.setVisibleOnAllWorkspaces(true);
  mainWindow.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.whenReady().then(() => {
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});
