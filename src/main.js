var Gpio = require("onoff").Gpio;
var BUTTON = new Gpio(12, "out");

function readButton() {
  console.log(BUTTON.readSync());
}

setInterval(readButton, 200);

// LED.writeSync(1); //set pin state to 1 (turn LED on)
//   } else {
//     LED.writeSync(0); //set pin state to 0 (turn LED off)
//   }
// }

// function endBlink() { //function to stop blinking
//   clearInterval(blinkInterval); // Stop blink intervals
//   LED.writeSync(0); // Turn LED off
//   LED.unexport(); // Unexport GPIO to free resources
