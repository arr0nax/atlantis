var Vonda = require('./../js/vonda.js').vondaModule;

function display(post) {
  $('#blog').append('<li>'+post[0]+': '+post[1]+'</li>');
}

$(function() {
  var vonda = new Vonda('kittenluver', 13, '3967418257981905863');
  var travis = new Vonda('kittenluver', 13, '32977108');
  var mike = new Vonda('kittenluver', 13, '368583982412008379');
  vonda.onTheHalfShell(display);
});
