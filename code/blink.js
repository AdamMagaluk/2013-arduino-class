var five = require("johnny-five"),
    board = new five.Board();
 
board.on("ready", function() {
    // Blink with 1000ms intervals
    (new five.Led(13)).strobe(1000);
});
