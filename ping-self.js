var request = require("request");

var URL = process.argv[2] || process.env.APP_URL;
if (!URL) {
  return;
}

request(URL, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log("Successfully pinged " + URL);
  }
  else {
    console.error("ERROR " + response.statusCode + " pinging " + URL + ": " + error);
  }
});
