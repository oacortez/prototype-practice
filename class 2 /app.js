const http = require('http');
const server = http.createServer((req,res) => {
    res.writeHead(200,{"Content-Type": "tesct/plain" })
    res.write("yerrrr its me ")
    res.end();

});

server.listen(3000);