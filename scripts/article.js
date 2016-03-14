var articles = [];

function Article (opts) {
  this.title = opts.title;
  this.institute = opts.institute;
  this.instituteUrl = opts.instituteUrl;
  this.category = opts.category;
  this.body = opts.body;
}

Article.prototype.toHtml = function() {

  var theTemplateScript = $('#rawData-template').html();
  var theTemplate = Handlebars.compile(theTemplateScript);



  var theCompiledHtml = theTemplate(this);
  return theCompiledHtml;
};

//

//ele-element- rawDAta each element
rawData.forEach(function(ele) {
  articles.push(new Article(ele));
});


// //a-variable- Structure of Object
// articles.forEach(function(a){
//   if (a.category === 'education') {
//     $('#education').append(a.toHtml());
//   }
// });
//
// articles.forEach(function(a){
//   if (a.category === 'projects') {
//     $('#projects').append(a.toHtml());
//   }
// });

// #articles
articles.forEach(function(a){
  $('#articles').append(a.toHtml());
});
// #articles
