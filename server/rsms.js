const bunyan = require("bunyan");
const http = require("http");
const fs = require("fs");

const LOGGER = bunyan.createLogger({name: "rsms"});

const server = http.createServer(function(request, response) {
  var filePath = "app" + request.url;
  if (request.url == "/") {
    filePath += "index.html";
  }
  fs.exists(filePath, function(exists) {
    if (exists) {
      LOGGER.info("Processing request: " + request.url);
      response.writeHead(200);
      var readStream = fs.createReadStream(filePath);
      readStream.pipe(response, {autoClose: true});
    } else {
      LOGGER.warn("Resource not found: " + request.url);
      response.writeHead(404, {"Content-Type": "text/plain"});
      response.write("404: Not found");
      response.end();
    }
  });
});

module.exports = server;
