const http = require('http');
const createBlogPosts = require('./loremModule');

const hostname = '127.0.0.1';
const port = 3003;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/json');
	res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
	res.end(createBlogPosts(15));
});

server.listen(port, hostname, () => {
	console.log('Server running at http://' + hostname + ':' + port + '/');
});
