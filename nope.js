var http = require('http');
var fs = require('fs');

var readHtml = function (fileName, res) {
    fs.readFile(__dirname + '\\' + fileName, 'utf8',
        function (err, data) {
            if (err) {
                // Handle exception...
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            }
    });
};

var server = http.createServer(function (req, res) {
    switch (req.url) {
        case '/about.html':
            readHtml('about.html', res);
            break;
        case '/index.html':
        case '/':
            readHtml('index.html', res);
            break;
        default:
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.end('<h1>404 - Page not found!</h1><p>What were you even trying to do...?</p>');
            break;
    }
});
server.listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');