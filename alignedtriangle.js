/*this will create an aligned triangle, with vertical alternate colors */

var Drone = require('../drone').Drone;
var blocks = require('blocks');

function alignedtriangle(base,height)
{
	up(1);
	this.chkpt('alignedtriangle');
	
	var rainbowColors = [blocks.wool.red, blocks.wool.orange, 
	blocks.wool.yellow, blocks.wool.lime, blocks.wool.lightblue, 
	blocks.wool.blue, blocks.wool.purple];

    if (typeof base == "undefined")
        base = 7;
    if (typeof height == "undefined")
        height = base;
	
    for (var i = base; i > 0; i--){
	   this.boxa(rainbowColors,i,1,1).up();
   }
   
   this.move('alignedtriangle'); 
   
};
Drone.extend(alignedtriangle);
