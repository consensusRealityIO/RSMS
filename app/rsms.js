/* global io $*/

(function() {
  var webSocket = io.connect();
  webSocket.on("disconnect", function() {
    $(".status-row").removeClass("invisible");
    $(".status-content").text("Connection error");
  });
  webSocket.on("connect", function() {
    $(".status-row").addClass("invisible");
    $(".status-content").text("");
  });
}());
