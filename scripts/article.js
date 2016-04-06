var myself = this;

(function(module) {

  function Article (opts) {
    myself.title = opts.title;
    myself.institute = opts.institute;
    myself.instituteUrl = opts.instituteUrl;
    myself.category = opts.category;
    myself.body = opts.body;
  }

  // array for projects
  articlesProjects = [];

  // array for education
  articlesEducation = [];

  Article.prototype.toHtml = function() {
    var theTemplateScript = $('#rawData-template').html();
    var theTemplate = Handlebars.compile(theTemplateScript);
    var theCompiledHtml = theTemplate(myself);
    return theCompiledHtml;
  };

// Refactoring the forEach code by using .map method
// Function that pushes the data into the array articlesEducation and insantiating a new object Education using Constructor.
  Article.loadEducation = function(data){
    data.map(function(ele) {
      console.log(data);
      articlesEducation.push(new Article(ele));
    });
  };

 // Function that pushes the data into the array articlesProjects and insantiating a new object Project using Constructor.
  Article.loadProjects = function(data){
    data.map(function(ele) {
      console.log(data);
      articlesProjects.push(new Article(ele));
    });

  };

 // ------------------------fetchEducation--------------------------------------------------------

  Article.fetchEducation = function(){
   //When the rawDataEducation is already in localStorage
  //  Second time- It will get the item by the key rawDataEducation which is set on line 61.
    if (localStorage.getItem('rawDataEducation')){
      var data = JSON.parse(localStorage.getItem('rawDataEducation'));
     //load all the data using .loadAll function
      Article.loadEducation(data);
     //render the index page
      articleView.initIndexPage();
    }
  else { //When we don't have rawDataEducation in the  localStorage
     //retriving the JSON file from the server with AJAX getJSON method
      $.getJSON('data/rawDataEducation.json',function(data){
       //load all the data using .loadAll function
        Article.loadEducation(data);
       //caching it in the localStorage (Key-rawDataEducation, value-JSON.stringfy(data))
       //First Time- Setting the key for the localStorage.So that we can get it with the Key 'rawDataEducation'.
        localStorage.setItem('rawDataEducation',JSON.stringify(data));
       //render the index page
        articleView.initIndexPage();
      });
    }
  };
 // -------------------------------------------------------------------------------------------------



// ------------------------fetchProjects--------------------------------------------------------
  Article.fetchProjects = function(){
   //When the rawDataEducation is alredy in localStorage
  //  Second time- It will get the item by the key rawDataProjects which is set on line 80.
  // The localStorage will have the data
    if (localStorage.getItem('rawDataProjects')){
     //load all the data using .loadAll function
      var data = JSON.parse(localStorage.getItem('rawDataProjects'));
      Article.loadProjects(data);
     //render the index page
      articleView.initIndexPage();
    }
  else { //When we don't have rawDataProjects in the  localStorage
     //retriving the JSON file from the server with AJAX getJSON method
      $.getJSON('data/rawDataProjects.json',function(data){
        console.log(data);
       //load all the data using .loadAll function
        Article.loadProjects(data);
       //caching it in the localStorage (Key-rawDataEducation, value-JSON.stringfy(data))
       //First Time- Setting the key for the localStorage.So that we can get it with the Key 'rawDataEducation'.
        localStorage.setItem('rawDataProjects',JSON.stringify(data));
       //render the index page
        articleView.initIndexPage();
      });
    }
  };
 // -------------------------------------------------------------------------------------------------
})(window);
