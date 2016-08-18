const bunyan = require("bunyan");
const rsms = require("server/rsms");

const LOGGER = bunyan.createLogger({name: "server"});

rsms.server.listen(process.env.HTTP_PORT);
LOGGER.info("RSMS server is running");
