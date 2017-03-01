var files = require ("fs");
var http = require ('http');

files.writeFile(__dirname + '/index.html','<h1>html rocks!!</h1>');

var pictureURL = "http://www.vintagesynth.com/sci/sci_prophet5_lg.jpg";
var picture = files.createWriteStream(__dirname + "/node-picture.jpg");
var request = http.get(pictureURL, function (res) {
  res.pipe(picture);
})
