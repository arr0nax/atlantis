(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var apiKey = 'AIzaSyBpH6fxVBVp05lfBOVcjO4QE70s_GdIKSE';

exports.apiKey = apiKey;

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

function Blogger() {
  this.blogId = '';
}

function display(posts) {
  var random = Math.floor(Math.random()*posts.length);
  var post = posts[random];
  $('#blog').append('<li>'+post[0]+': '+post[1]+'</li>');
}

Blogger.prototype.getBlogId = function(url) {
  blogger = this;
  $.get("https://www.googleapis.com/blogger/v3/blogs/byurl?url="+url+"&key="+apiKey, function(response){
    blogger.blogId = response.id;
    console.log('getblogid response: '+ blogger.blogId);
    blogger.query();
  });
}

Blogger.prototype.query = function() {
  $.get("https://www.googleapis.com/blogger/v3/blogs/"+this.blogId+"/posts?maxResults=500&key="+apiKey, function(response) {
    console.log(response);
    var posts = [];
    for(var i=0;i<response.items.length;i++){
      posts.push([response.items[i].title, response.items[i].content]);
    }

    display(posts)
    return posts;
  });
}

exports.bloggerModule = Blogger;

},{"./../.env":1}],3:[function(require,module,exports){
var Blogger = require('./../js/blogger.js').bloggerModule;

function Googler(term) {
  this.term = term;
  this.blogger = new Blogger();
}

Googler.prototype.search = function(){
  var googler = this;
  $.get('https://www.googleapis.com/customsearch/v1?q='+this.term+'+-profile&key=AIzaSyBpH6fxVBVp05lfBOVcjO4QE70s_GdIKSE&cx=004331326847178532475:pdzqorhdao8').then(function(response){
    console.log('googler response: ' + response.items[0].link);
    googler.blogger.getBlogId(response.items[0].link);
  });
};

exports.googlerModule = Googler;

},{"./../js/blogger.js":2}],4:[function(require,module,exports){
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

Vonda.prototype.randomWord = function() {
  $.get('http://www.setgetgo.com/randomword/get.php', function(response) {
    vonda = new Vonda;
    vonda.googler = new Googler(response);
    vonda.posts = vonda.googler.search();
  });
}

exports.vondaModule = Vonda;

},{"./../js/blogger.js":2,"./../js/googler.js":3}],5:[function(require,module,exports){
var Vonda = require('./../js/vonda.js').vondaModule;



$(function() {
  var vonda = new Vonda('kittenluver', 13, 'mermaid');
  // var travis = new Vonda('kittenluver', 13, '32977108');
  // var mike = new Vonda('kittenluver', 13, '368583982412008379');
  console.log(vonda.randomWord());
});

},{"./../js/vonda.js":4}]},{},[5]);
