(function(module) {

  rawDataProjects.forEach(function(ele) {
    articlesProjects.push(new Article(ele));
  });

  rawDataEducation.forEach(function(ele) {
    articlesEducation.push(new Article(ele));
  });

  articlesEducation.forEach(function(a){
    $('#education').append(a.toHtml());
  });

  articlesProjects.forEach(function(a){
    $('#projects').append(a.toHtml());
  });

// Configure a view object, to hold all our functions for dynamic updates and article-related event handlers.
  var articleView = {};

  articleView.populateFilters = function() {
    $('#projects article').each(function() {
      if (!$(this).hasClass('template')) {
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
  //Added an event handler to reveal and hide the read-on when clicked.
    $('article').on('click',function(ev){
      var $evTarget = $(ev.target);
      ev.preventDefault();
      if($evTarget.hasClass('read-on')){
        $evTarget.parent().children().show();
        $evTarget.hide();
      }
    });
  };

// A function that initiates the index page and goes thro each item of array articlesEducation
// and appends it to the screen.
  articleView.initIndexPage = function() {
  //Array of educat data including all functions
    articlesEducation.forEach(function(a){
      $('#education').append(a.toHtml());
    });

//Array of project data including all functions
    articlesProjects.forEach(function(a){
      $('#projects').append(a.toHtml());
    });

    $(document).ready(function() {
      articleView.populateFilters();
      articleView.handleCategoryFilter();
      articleView.handleMainNav();
      articleView.setTeasers();
    });

  };
  module.articleView = articleView;
})(window);
