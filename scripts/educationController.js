(function(module) {
  var educationController = {};

  // Function that hides all the sections under main HTML element and
  // reveals only the selcted ID section(education)
  educationController.index = function() {
    $('main > section').hide();
    $('#education').fadeIn();
  };

  module.educationController = educationController;
})(window);
