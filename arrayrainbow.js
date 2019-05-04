var Drone = require('../drone').Drone;
var blocks = require('blocks');

function arrayrainbow()
{
	this.chkpt('arrayrainbow');
	up(1);

    var rainbowColors = [blocks.wool.red, blocks.wool.orange, blocks.wool.yellow, blocks.wool.lime, blocks.wool.lightblue, blocks.wool.blue,
	blocks.wool.purple];
    
	boxa(rainbowColors, 7, 1, 30);
   
    this.move('arrayrainbow'); 
   
};

Drone.extend(arrayrainbow);
