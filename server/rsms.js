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
      response.writeHead(200);
      var readStream = fs.createReadStream(filePath);
      readStream.pipe(response, {autoClose: true});
    } else {
      LOGGER.warn("Unmapped request URL: " + request.url);
      response.writeHead(404);
    }
    response.end();
  });
});

module.exports = server;
