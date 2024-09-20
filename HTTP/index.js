const http = require('http');

http.createServer((req, res) => {
    if (req.method === 'GET') {
        if (req.url === '/') {
            console.log('首页');
            res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'}); // 设置字符编码
            res.end('首页'); // 发送响应内容
        } else {
            res.writeHead(404, {'Content-Type': 'text/plain; charset=utf-8'});
            res.end('404 Not Found');
        }
    } else {
        res.writeHead(405, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end('Method Not Allowed');
    }
}).listen(8090, () => {
    console.log("8090端口启动");
});
