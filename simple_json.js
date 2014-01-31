var http = require('http');

function handle_request(req, res) {
	console.log("Request: " + req.method + " - " + req.url);
	res.writeHead(200, {"ContentType":"application/json"});
	res.end(JSON.stringify({error:null})+"\n");
}

var s = http.createServer(handle_request);
s.listen(8080);


