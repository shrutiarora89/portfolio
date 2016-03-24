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
// getting the rawDataEducation key as a parameter
 // Article.loadAll = function(rawDataEducation){
 //
 //   rawDataEducation.forEach(function(ele) {
 //     articlesEducation.push(new Article(ele));
 //   });
 //
 // };

 Article.fetchAll = function(){
   //When the rawDataEducation is alredy in localStorage
   if(false && localStorage.getItem('rawDataEducation')){
     //load all the data using .loadAll function
     Article.loadAll('#rawData-template');
     //render the index page
     articleView.getItem();
   }
  else{ //When we don't have rawDataEducation in the  localStorage
  //retriving the JSON file from the server with AJAX getJSON method
     $.getJSON('data/rawDataEducation.json',function(data){

  //load all the data using .loadAll function
       Article.loadAll(data);              
       console.log(data);
//caching it in the localStorage (Key-rawDataEducation, value-JSON.stringfy(data))
       localStorage.setItem('rawDataEducation',JSON.stringify(data));
     //render the index page
       articleView.initIndexPage();
     });
   }
 };
//ele-element- rawDAta each element
// rawData.forEach(function(ele) {
//   articles.push(new Article(ele));
// });

//
 // rawDataProjects.forEach(function(ele) {
 //   articles.push(new Article(ele));
 // });


//


// #articles
// articles.forEach(function(a){
//   $('#articles').append(a.toHtml());
// });
// #article`s

//a-variable- Structure of Object
 articlesEducation.forEach(function(a){
   $('#education').append(a.toHtml());
 });

 articles.forEach(function(a){
   $('#projects').append(a.toHtml());
 });
