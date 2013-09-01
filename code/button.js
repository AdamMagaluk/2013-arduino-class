var five = require("johnny-five"),
    board = new five.Board();

board.on("ready", function() {

  // Create a new `button` hardware instance.
  var button = new five.Button(8);

  // "down" the button is pressed
  button.on("down", function() {
    console.log("button down!!");
  });

  // "up" the button is released
  button.on("up", function() {
    console.log("button up!!");
  });
});