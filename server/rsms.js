const bunyan = require("bunyan");
const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const LOGGER = bunyan.createLogger({name: "rsms"});
const APP_DIR = __dirname.substr(0, __dirname.lastIndexOf("/")) + "/app";
LOGGER.info("Static files directory: " + APP_DIR);

const expressApp = express();
expressApp.use(express.static(APP_DIR));

const httpServer = http.createServer(expressApp);
const webSocketApp = socketIo.listen(httpServer);
webSocketApp.on("connection", function() {
  LOGGER.info("WebSocket connected");
});

module.exports.server = httpServer;
