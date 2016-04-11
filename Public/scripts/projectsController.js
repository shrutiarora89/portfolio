(function(module) {
  var projectsController = {};

  // Function that hides all the sections under main HTML element and
  // reveals only the selcted ID section(projects)
  projectsController.index = function() {
    $('main > section').hide();
    $('#projects').fadeIn();
  };

  module.projectsController = projectsController;
})(window);
