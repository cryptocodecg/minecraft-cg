var Drone = require('../drone').Drone;
var blocks = require('blocks');

function mytriangle(base,height)
{
	this.chkpt('mytriangle');
	up(1);
	
    if (typeof width == "undefined")
        width = 5;
    if (typeof length == "undefined")
        length = width;
	
   for (var i = 0; i < height; i++){
	   for (var j = base; j > 0; j--)
	   {
	      this.box(blocks.glass_pane,j-i,1,1);
       }
	   up(1);
   }
   this.move('mytriangle'); 
   
    
    return this;
};
Drone.extend(mytriangle);
