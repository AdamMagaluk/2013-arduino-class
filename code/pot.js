var five = require("johnny-five");
var board = new five.Board();
 
board.on("ready", function() {
 
  // Create a new `potentiometer`
  var potentiometer = new five.Sensor({
    pin: "A0",
    freq: 250
  });
 
  //read get the current reading from the pot
  potentiometer.on("read", function() {
    console.log("Value="+this.value);
  });

});