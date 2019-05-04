//var Drone = require('../drone').Drone;
var Drone = require('drone'),
    blocks = require('blocks');

function mytriangle(base,height)
{
	this.chkpt('mytriangle');
	up(1);
	
    if (typeof base == "undefined")
        base = 5;
    if (typeof height == "undefined")
        height = base;
	
	var j = base;
    for (var i = 0; i < height; i++){
	   this.box(blocks.oak,j-i,1,1).up(1).right(1);
	   j--;
   }
   
   this.move('mytriangle'); 
   
};
Drone.extend(mytriangle);
