var Drone = require('../drone').Drone;
var blocks = require('blocks');

function colortriangle(base,height)
{
	up(1);
	this.chkpt('colortriangle');
	
	var rainbowColors = [blocks.wool.red, blocks.wool.orange, 
	blocks.wool.yellow, blocks.wool.lime, blocks.wool.lightblue, 
	blocks.wool.blue, blocks.wool.purple];

    if (typeof base == "undefined")
        base = 9;
    if (typeof height == "undefined")
        height = base;
	
	var j = base;
    for (var i = 0; i < height; i++){
	   this.boxa(rainbowColors,j-i,1,1).up(1).right(1);
	   j--;
   }
   
   this.move('colortriangle'); 
   
};
Drone.extend(colortriangle);
