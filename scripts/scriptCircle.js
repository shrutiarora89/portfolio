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
    setTimeout(function(){ x();
    }, 12);
  }
};

x();
