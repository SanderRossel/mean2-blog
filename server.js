var express = require('express');
var app = express();

var options = {
    root: __dirname
}

app.get(['/', '/index.html'], function (req, res) {
    res.sendFile('index.html', options);
});
app.get('/about.html', function (req, res) {
    res.sendFile('about.html', options);
});
app.get('/echo.html', function (req, res) {
    res.send('<h1>Echo</h1><p>This is an echo... ' + req.query.say + '</p>');
});
app.get('*', function (req, res) {
   res.send('<h1>404 - Page not found!</h1><p>What were you even trying to do...?</p>'); 
});

var server = app.listen(1337, '127.0.0.1');