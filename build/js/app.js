(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Blogger(blogId) {
  this.apiKey = 'AIzaSyBpH6fxVBVp05lfBOVcjO4QE70s_GdIKSE';
  this.blogId = blogId;
}

Blogger.prototype.query = function() {
  return "https://www.googleapis.com/blogger/v3/blogs/"+this.blogId+"/posts?maxResults=500&key="+this.apiKey;
}

exports.bloggerModule = Blogger;

},{}],2:[function(require,module,exports){
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

},{"./../js/blogger.js":1}],3:[function(require,module,exports){
var Vonda = require('./../js/vonda.js').vondaModule;

function display(post) {
  $('#blog').append('<li>'+post[0]+': '+post[1]+'</li>');
}

$(function() {
  var vonda = new Vonda('kittenluver', 13, '3967418257981905863');
  vonda.onTheHalfShell(display);
});

},{"./../js/vonda.js":2}]},{},[3]);
