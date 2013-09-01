var five = require("johnny-five"),
    board, servo;

board = new five.Board();
board.on("ready", function() {

  // Create a new `servo` hardware instance.
  servo = new five.Servo(10);

  servo.sweep();

  // "move" events fire after a successful move.
  servo.on("move", function( err, degrees ) {
    console.log( "move", degrees );
  });

});