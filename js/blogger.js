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
