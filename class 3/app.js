const http = require('http');
const fs = require ('fs');

const server = http.createServer((req,res) => {
    if(req.method === "GET" && req.url === "/index.html") {
        return index(req,res)
    }
    if (req.method === "GET" && req.url === "/together.html"){
        return together(req,res)
    }
});

function index (req,res){
    const stat = fs.statSync('./index.html');
    res.writeHead(200,{
        'Content-Type': 'text/html',
        'Content-Lenght': stat.size
    })

    const readStream = fs.createReadStream('./index.html');
    readStream.pipe(res);
}

function together (req,res){
    const stat = fs.statSync('./together.html');
    res.writeHead(200,{
        'Content-Type': 'text/html',
        'Content-Lenght': stat.size
    })

    const readStream = fs.createReadStream('./together.html');
    readStream.pipe(res);
}

server.listen(3000);