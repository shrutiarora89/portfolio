
// array for projects
articlesProjects = [];

// array for education
articlesEducation = [];

loadArticlesData = function() {
  rawDataProjects.forEach(function(ele) {
    articlesProjects.push(new Article(ele));
  });

  articlesProjects.forEach(function(a){
    $('#projects').append(a.toHtml());
  });

//
  rawDataEducation.forEach(function(ele) {
    articlesEducation.push(new Article(ele));
  });

//Appending data into education section
  articlesEducation.forEach(function(a){
    $('#education').append(a.toHtml());
  });
};


// A View object that holds all our functions for dynamic updates and article-related event handlers.
//Empty Object
var articleView = {};

// populateFilters is a property of object artticleView
articleView.populateFilters = function() {
  $('article').each(function() {
    if (true || !$(this).hasClass('template')) {
      var val = $(this).attr('data-category');
      optionTag = '<option value="' + val + '">' + val + '</option>';
      if ($('#category-filter option[value="' + val + '"]').length === 0) {
        $('#category-filter').append(optionTag);
      }
    }
  });
};

articleView.handleCategoryFilter = function() {
  $('#category-filter').on('change', function() {
    if ($(this).val()) {
      $('article').hide();
      $('article[data-category="' + $(this).val() + '"]').fadeIn();
    } else {
      $('article').fadeIn();
      $('article.template').hide();
    }
    $('#author-filter').val('');
  });
};

//NAVIGATION
articleView.handleMainNav = function() {
  $('.main-nav').on('click', '.tab', function(e) {
    $('.tab-content').hide(); //hide the data for all the tabs.
    $('#' + $(this).data('content')).fadeIn();//Show the data for whichever tab is clicked.
  });

  $('.main-nav .tab:first').click(); // Let's now trigger a click on the first .tab element, to set up the page.
};


articleView.setTeasers = function() {
  $('.article-body *:nth-of-type(n+2)').hide(); // Hide elements beyond the first 2 in any artcile body.


  $('article').on('click',function(ev){
    var $evTarget = $(ev.target);
    ev.preventDefault();
    if($evTarget.hasClass('read-on')){
      $evTarget.parent().children().show();
      $evTarget.hide();
    }
  });
};

$(document).ready(function() {
  loadArticlesData();
  articleView.populateFilters();
  articleView.handleCategoryFilter();
  articleView.handleMainNav();
  articleView.setTeasers();
});
