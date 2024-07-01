const http = require('http');
const fs = require('fs');

const hello = fs.readFileSync('hello.txt');
const logedin = fs.readFileSync('loged.txt');
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.setHeader('Content-Type','text/html');
        res.write('<html> <head> <title> My First Page </title> </head> <body>');
        res.write(hello);
        res.write('</body></html>');
    }
    else{
        res.setHeader('Content-Type','text/html');
        res.write('<html> <head> <title> My First Page </title> </head> <body>');
        res.write(logedin);
        res.write('</body></html>');
    }
    res.end();
})


server.listen(3000,'localhost',()=>{
    console.log('Server is running on port 3000');
});