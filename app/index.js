/*
*PRIMARY FILE FOR THE API
*
*/

//Dependencies
var http = require('http');
var url = require('url');
var StringDecoder = require('string_decoder').StringDecoder;

// The server should respond to all requests with a string

var server = http.createServer(function(req,res){

  //Get the URL and parse it
  var parsedUrl = url.parse(req.url,true)

  //Get the path
  var path = parsedUrl.pathname;
  var trimmedPath = path.replace(/^\/+|\/+$/g, '');

  // Get the query string as an object
  var queryStringObject = parsedUrl.query;

  // Get the HTTP Method
  var method = req.method.toLowerCase();

  //Get the headers as an queryStringObject
  var headers = req.headers;

  // Get the payload, if any
  var decoder = new StirngDecoder ('utf-8');
  var buffer = '';
  req.on('data',functon(data){
    buffer+=decoder.write(data);
  });


  //Send the response
  res.end('Hello World\n');

  // Log the request path
  //console.log('Request received on path: '+trimmedPath+' with method '+method+' and these query string parameters ',queryStringObject);
  console.log('Request received with these headers',headers);

});

//Start the server, and have it listen on port 3000
server.listen(3000,function(){
  console.log("The server is listening on port 3000 now");
})
