(function(module) {
  var contactController = {};

  // Function that hides all the sections under main HTML element and
  // reveals only the selcted ID section(contact)
  contactController.index = function() {
    $('main > section').hide();
    $('#contact').fadeIn();
  };

  module.contactController = contactController;
})(window);
