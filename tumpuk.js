var Drone = require('../drone').Drone;
var blocks = require('blocks');

function tumpuk( tingkat ) {
  echo(tingkat);
  this.chkpt('tumpuk');
  for (var i = 0; i < tingkat; i++){
    this.up(1).box0('35:6',1, 1, 1);
  }
  
  this.move('tumpuk');
};

Drone.extend(tumpuk);

