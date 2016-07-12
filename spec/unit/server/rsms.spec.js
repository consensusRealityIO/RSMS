const rsms = require("server/rsms");
const mocha = require("mocha");
const request = require("supertest");

mocha.describe("unit spec of rsms", function() {
  mocha.describe("rsms", function() {
    mocha.it("should return a status code 200 upon request of \"/\"", function() {
      request(rsms)
        .get("/")
        .expect(200);
    });
  });
});
