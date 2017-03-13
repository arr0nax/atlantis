function Blogger(blogId) {
  this.apiKey = 'AIzaSyBpH6fxVBVp05lfBOVcjO4QE70s_GdIKSE';
  this.blogId = blogId;
}

Blogger.prototype.query = function() {
  return "https://www.googleapis.com/blogger/v3/blogs/"+this.blogId+"/posts?maxResults=500&key="+this.apiKey;
}

exports.bloggerModule = Blogger;
