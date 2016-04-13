(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    //Using jQuery Selector selecting about page elements and reveal it, hiding its siblings
    $('#about').show().siblings().hide();

    //Requesting the function requestRepos by passing the repoView as a calback function to render the page.
    repos.requestRepos(repoView.index);
  };

  module.aboutController = aboutController;
})(window);
