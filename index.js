const electron = require("electron");
const url = require("url");
const path = require("path");

const { app, BrowserWindow, Menu } = electron;

let mainWindow;

// listen for app to be ready
app.on("ready", function() {
  // create new window
  mainWindow = new BrowserWindow({});

  // load html into window
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, "mainWindow.html"),
    protocol: "file:",
    slashes: true
  }));

  // build menu from template
  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  // insert menu

  Menu.setApplicationMenu(mainMenu);
});

// create menu template
const mainMenuTemplate = [
  {
    label: "File",
    submenu: [
      {
        label: "Quit",
        // if on mac, look for command+q, else look for ctrl+q
        accelerator: process.platform === "darwin" ? "Command+Q" : "Ctrl+Q",
        click() {
          app.quit();
        }
      }
    ]
  },
]

if(process.env.NODE_ENV != "production") {
  mainMenuTemplate.push({
    label: "Developer Tools",
    submenu: [
      {
        label: "Toggle Inspector",
        accelerator: process.platform === "darwin" ? "Command+I" : "Ctrl+I",
        click(item, focusedWindow) {
          focusedWindow.toggleDevTools();
        }
      }
    ]
  });
}
