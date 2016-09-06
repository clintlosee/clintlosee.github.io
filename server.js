// Declare our dependencies
var express = require('express');
var request = require('superagent');
var path    = require("path");

// Create our express app
var app = express();

// This tells Express out of which directory to serve static assets like CSS and images
app.use(express.static(__dirname + '/dist'));

// The homepage route of our application does not interface with the API and is always accessible. 
// We won’t use the getAccessToken middleware here. We’ll simply render the index view.
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname+'/dist/index.html'));
})

// Our Website will listen on port 3200.
app.listen(3200);
console.log('Magic happens on port 3200');