import { app, BrowserWindow } from "electron";

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    backgroundColor: "white",
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadFile("./assets/index.html");
};

const main = async () => {
  await app.whenReady();
  createWindow();
};

main();
