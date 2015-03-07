var PORT = process.env.PORT || process.argv[2] || 3000;

var webshot = require('webshot');
var express = require('express');
var app = express();

// generate a PNG of the requested URL
app.get('/:url.png', function(req, res) {
  var url = decodeURIComponent(req.params.url);
  var options = {
    userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:34.0) Gecko/20100101 Firefox/34.0",
    phantomConfig: {
      "ignore-ssl-errors": "true",
      "ssl-protocol": "ANY"
    }
  };
  webshot(url, options, function(error, renderStream) {
    if (error) {
      // really we should send something useful back here
      console.error(error);
      res.end();
      return;
    }
    
    renderStream.pipe(res);
  });
});

app.listen(PORT);
console.log('Running PageSnap server on port %d', PORT);
