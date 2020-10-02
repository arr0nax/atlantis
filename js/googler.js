var Blogger = require('./../js/blogger.js').bloggerModule;

function Googler(term) {
  this.term = term;
  this.blogger = new Blogger();
}

Googler.prototype.search = function(){
  var googler = this;
  $.get('https://www.googleapis.com/customsearch/v1?q='+this.term+'+-profile&key=yourapikey&cx=004331326847178532475:pdzqorhdao8').then(function(response){
    console.log('googler response: ' + response.items[0].link);
    googler.blogger.getBlogId(response.items[0].link);
  });
};

exports.googlerModule = Googler;
