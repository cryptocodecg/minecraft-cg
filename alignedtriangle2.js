/*this will create an aligned triangle, with horizontal alternate colors */

var Drone = require('../drone').Drone;
var blocks = require('blocks');

function alignedtriangle2(base,height)
{
	up(1);
	this.chkpt('alignedtriangle2');
	
	var rainbowColors = [blocks.wool.red, blocks.wool.orange, 
	blocks.wool.yellow, blocks.wool.lime, blocks.wool.lightblue, 
	blocks.wool.blue, blocks.wool.purple];

    if (typeof base == "undefined")
        base = 9;
    if (typeof height == "undefined")
        height = base;
	
	j = 0;
	for (var i = base; i > 0; i--){
	   this.boxa(rainbowColors,i-j,1,1).right(1).up(1);
	   j++;
	}

   
   this.move('alignedtriangle2'); 
   
};
Drone.extend(alignedtriangle2);
