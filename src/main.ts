import { app, BrowserWindow, Notification } from 'electron';

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    backgroundColor: 'white',
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadFile('./assets/index.html');
};

const main = async () => {
  await app.whenReady();
  createWindow();
  const notification = new Notification({
    title: 'Hello world!',
    body: 'App avviata!',
  });
  notification.show();

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
