var Vonda = require('./../js/vonda.js').vondaModule;



$(function() {
  var vonda = new Vonda('kittenluver', 13, 'mermaid');
  // var travis = new Vonda('kittenluver', 13, '32977108');
  // var mike = new Vonda('kittenluver', 13, '368583982412008379');
  console.log(vonda.onTheHalfShell());
});
