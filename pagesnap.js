var PORT = process.env.PORT || process.argv[2] || 3000;

var webshot = require('webshot');
var express = require('express');
var app = express();

// generate a PNG of the requested URL
app.get('/:url.png', function(req, res) {
  var url = decodeURIComponent(req.params.url);
  webshot(url, function(error, renderStream) {
    if (error) {
      // really we should send something useful back here
      res.end();
    }
    
    renderStream.pipe(res);
  });
});

app.listen(PORT);
console.log('Running PageSnap server on port %d', PORT);
