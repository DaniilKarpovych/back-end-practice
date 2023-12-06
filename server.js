const koa = require('koa');
const server = new koa();
const RouterOld = require('koa-router');

const static = require('koa-static')

const route = new RouterOld()

route.get('/', (ctx,next)=>ctx.body = 'Hello world')

server.use(static('./public'))
server.use(route.routes())

server.listen(1994, 'localhost', ()=>console.log('Listening on port 1994'))






// const http = require('http');
//
// const hostname = '127.0.0.1';
// const port = 3000;
//
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World');
// });
//
// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });
