import { app, BrowserWindow } from 'electron';
import path from 'path';
const isDev = !app.isPackaged;

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    backgroundColor: 'white',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
    },
  });

  win.loadFile('./build/index.html');
  console.log(isDev);
  console.log(__dirname);
  if (isDev) win.webContents.openDevTools();
};

const main = async () => {
  await app.whenReady();
  // If development environment
  if (isDev) {
    require('electron-reload')(__dirname, {
      electron: path.join(__dirname, '..', 'node_modules', '.bin', 'electron'),
      hardResetMethod: 'exit',
    });
  }

  createWindow();

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
};

main();
