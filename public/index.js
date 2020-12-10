const { app, BrowserWindow } = require("electron");

// Watch changes in webpack_build
require("electron-reload")(`${__dirname}/`);

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) { // eslint-disable-line global-require
	app.quit();
}

let win;

const createWindow = () => {
	win = new BrowserWindow({
		width          : 1300,
		height         : 850,
		resizable      : false,
		webPreferences : {
			nodeIntegration : true,
		},
	});

	win.webContents.openDevTools();

	win.on("closed", () => win = null);
	// win.setMenu(null);
	win.loadFile(`${__dirname}/index.html`);
};

app.on("ready", createWindow);

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit();
	}
});

app.on("activate", () => {
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow();
	}
});
