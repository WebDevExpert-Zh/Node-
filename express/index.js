const express = require('express')
const User = require('./src/router/user')
const log4js = require('./src/middleware/logger')
const path = require('path')
// 路由模块
const router = express.Router()
const whitelist = ['localhost'];

// 防止热链中间件
const preventHotLinking = (req, res, next) => {
    const referer = req.get('referer'); // 获取请求头部中的 referer 字段
    if (referer) {
        const { hostname } = new URL(referer); // 从 referer 中解析主机名
        if (!whitelist.includes(hostname)) { // 检查主机名是否在白名单中
            res.status(403).send('Forbidden'); // 如果不在白名单中，返回 403 Forbidden
            return;
        }
    }
    next(); // 如果在白名单中，继续处理下一个中间件或路由
};
const app = express()
// app.use()中间件
// 中间件是一个关键概念。中间件是处理HTTP请求和响应的函数，它位于请求和最终路由处理函数之间，
// 可以对请求和响应进行修改、执行额外的逻辑或者执行其他任务。
// 针对post请求 因为post请求是一个请求体 是一个application/json格式的json请求体 get则是一个查询参数
app.use('*', (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    next()  
})
app.use(express.json())
app.use(log4js)
// app.use(preventHotLinking);
// app.use('/assets', express.static('./src/static'))
app.use('/user', User)

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/list', (req, res) => {
    res.json({
        code: 200
    })
    res.send('list page', req.params)
})
// SSE 是一种在客户端和服务器之间实现单向事件流的机制 允许服务器主动向客户端发送事件数据
app.get('/sse', (req, res) => {
       res.setHeader('Content-Type', 'text/event-stream')
    res.status(200)
    setInterval(() => {
        res.write('event: test\n')
        res.write('data: ' + new Date().getTime() + '\n\n')
    }, 1000)
})
app.listen(8090, () => {
    console.log('listening on port 8090');

})