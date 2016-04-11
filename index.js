var express = require('express');
//call the express server and bind it to the variable app
var app = express();
//PORT-environment variable; check to see if there is any variable caled pot or go to port 3000
var port = process.env.PORT||3000;

// get the directory namae and concatenate to /public path nmae
// method static - these are the static part of the site.
// .use -use this path
app.use(express.static(__dirname + '/public'));

//define route
//sending the index.html to the client from the server
app.get('/',function(req,res){
  console.log(req.body);
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port,function(){
  console.log('Server running on port' + port);
});
