var five = require("johnny-five"),
    board = new five.Board();

board.on("ready", function() {
 
  // Create a new `potentiometer` hardware instance.
  var potentiometer = new five.Sensor({
    pin: "A0",
    freq: 10
  });

  var servo = new five.Servo(10);

  // "read" get the current reading from the potentiometer
  potentiometer.on("read", function() {
    // convert [0,1023] -&gt; [-180,180]
    var deg = (this.value * 360) / 1023 - 180;
    servo.move(Math.round(deg));
  });

});