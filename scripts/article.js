// array for projects
 articles = [];

// array for education
 articlesEducation = [];

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

 rawDataProjects.forEach(function(ele) {
   articles.push(new Article(ele));
 });

 rawDataEducation.forEach(function(ele) {
   articlesEducation.push(new Article(ele));
 });

 articlesEducation.forEach(function(a){
   $('#education').append(a.toHtml());
 });

 articles.forEach(function(a){
   $('#projects').append(a.toHtml());
 });
