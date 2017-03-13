var Vonda = require('./../js/vonda.js').vondaModule;

function display(post) {
  $('#blog').append('<li>'+post[0]+': '+post[1]+'</li>');
}

$(function() {
  var vonda = new Vonda('kittenluver', 13, '3967418257981905863');
  vonda.onTheHalfShell(display);
});
