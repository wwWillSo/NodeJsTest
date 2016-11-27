var http = require('http')

http
	.createServer(function (req, resp) {
		resp.writeHead(200, {'Content-Type' : 'text/plain'})
		resp.write('hello nodejs')
		resp.end()
	})
	.listen(2016)