(function(module) {

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

 module.Article = Article;
})(window);
