// Assigning each nav links with url and linking them to the single controller function.
// and linking each html url's in index.html to respective nav elements.
page('/',homeController.index);
page('/home',homeController.index);
page('/about',aboutController.index);
page('/education',educationController.index);
page('/projects',projectsController.index);
page('/contact',contactController.index);

// Activating page.js
page();
