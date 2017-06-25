var gpio = require('rpi-gpio');
 
var pin   = 11;
var delay = 2000;




 
gpio.setup(pin, gpio.DIR_OUT, blink);
 
var blink = () => {
	console.log('blink');
	gpio.write(pin, 1);
      setInterval(function() {         
        gpio.write(pin, 0);
      }, delay);
}