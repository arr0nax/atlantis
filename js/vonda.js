var Blogger = require('./../js/blogger.js').bloggerModule;


function Vonda(name, age, blogId) {
  this.favoriteBeach = 'all of them';
  this.saltWaterBaptism = true;
  this.name = name;
  this.age = age;
  this.gender = 'fish';
  this.blog = new Blogger(blogId);
}

Vonda.prototype.randomNumber = function(max) {
  return Math.floor(Math.random() * max);
}

Vonda.prototype.randomPost = function(posts) {
  return posts[this.randomNumber(posts.length)];
}

Vonda.prototype.onTheHalfShell = function(callback) {
  vonda = this;
  $.get(vonda.blog.query(), function(response) {
    var posts = [];
    for(var i=0;i<response.items.length;i++){
      posts.push([response.items[i].title, response.items[i].content]);
    }

    callback(vonda.randomPost(posts));
  });
}

exports.vondaModule = Vonda;
