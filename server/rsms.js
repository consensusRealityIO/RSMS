const bunyan = require("bunyan");
const express = require("express");

const LOGGER = bunyan.createLogger({name: "rsms"});
const APP_DIR = __dirname.substr(0, __dirname.lastIndexOf("/")) + "/app";
LOGGER.info("Static files directory: " + APP_DIR);

const server = express();
server.use(express.static(APP_DIR));

module.exports.server = server;
