var html = '';
var red;
var green;
var blue;
var rgbColor;

var i = 0;
var x = function() {
  if (i < 500) {
    red = Math.floor(Math.random() * 256 );
    green = Math.floor(Math.random() * 256 );
    blue = Math.floor(Math.random() * 256 );


    rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    html = '<div class="lens" style="background-color:' + rgbColor + '"></div>';
    jQuery('#bubbles').append(html);
    i++;
    setTimeout(function(){ x(); }, 12);
  }
};

x();


//==================test.js======================
//===============================================
//===============================================


// Canvas

// var canvas = document.createElement('canvas');
// var ctx = canvas.getContext('2d');
// canvas.width = 800;
// canvas.height = 400;
// document.body.appendChild(canvas);
//
//
// //===============================================
//
// // Background
// var bgReady = false;
// var bgImage = new Image();
// bgImage.onload = function() {
//   bgReady = true;
// };
// bgImage.src = 'AlexCode/img/background.png';
//
// // Ufo
// var ufoReady = false;
// var ufoImage = new Image();
// ufoImage.onload = function() {
//   ufoReady = true;
// };
// ufoImage.src = 'AlexCode/img/ufo.png';
//
// //===============================================
//
// // Sprites
// var ufo = {
//   speed: 300,
//   x: 200,
//   y: 200
// };
//
// //===============================================
//
// // Keyboard controls
// var keysDown = {};
//
// addEventListener('keydown', function(e) {
//   keysDown[e.keyCode] = true;
// }, false);
//
// addEventListener('keyup', function(e) {
//   delete keysDown[e.keyCode];
// }, false);
//
// //===============================================
//
// // Update sprites
// var update = function(modifier) {
//   if (38 in keysDown) { // User holding up
//     ufo.y -= ufo.speed * modifier;
//   }
//
//   if (40 in keysDown) { // User holding down
//     ufo.y += ufo.speed * modifier;
//   }
//
//   if (37 in keysDown) { // User holding left
//     ufo.x -= ufo.speed * modifier;
//   }
//
//   if (39 in keysDown) { // User holding right
//     ufo.x += ufo.speed * modifier;
//   }
// };
//
// //===============================================
//
// // Draw background and sprites
// var render = function() {
//   if (bgReady) {
//     ctx.drawImage(bgImage, 0, 0);
//   }
//
//   if (ufoReady) {
//     ctx.drawImage(ufoImage, ufo.x, ufo.y);
//   }
// };
//
// //===============================================
//
// // Main app function
// var main = function() {
//   var now = Date.now();
//   var delta = now - then;
//
//   update(delta / 1000);
//   render();
//
//   then = now;
//
//   // Request to do this again ASAP
//   requestAnimationFrame(main);
// };
//
// //===============================================
//
// // Cross-browser support for requestAnimationFrame
// var w = window;
// requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;
//
// //===============================================
//
// // Run the app
// var then = Date.now();
// main();
