var Blogger = require('./../js/blogger.js').bloggerModule;
var Googler = require('./../js/googler.js').googlerModule;


function Vonda(name, age) {
  this.favoriteBeach = 'all of them';
  this.saltWaterBaptism = true;
  this.name = name;
  this.age = age;
  this.gender = 'fish';
  this.blog = new Blogger();
  this.googler = new Googler('search');
  this.posts = 0;
}

Vonda.prototype.randomNumber = function(max) {
  return Math.floor(Math.random() * max);
};

Vonda.prototype.randomPost = function(posts) {
  return posts[this.randomNumber(posts.length)];
};

Vonda.prototype.onTheHalfShell = function() {
  vonda = this;
  vonda.posts = this.googler.search();
};

exports.vondaModule = Vonda;
