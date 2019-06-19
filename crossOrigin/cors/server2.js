let express = require('express')
let app = express()
let whiteList = ['http://localhost:3000']

app.use(function(req, res, next) {
    let origin = req.headers.origin
    if (whiteList.includes(origin)) {
        // 设置哪个源可以访问
        res.setHeader('Access-Control-Allow-Origin', origin)
        res.setHeader('Access-Control-Allow-Methods', 'PUT')
        res.setHeader('Access-Control-Allow-Credentials', true)
        // if(req.methods === 'OPTIONS') {
        //     req.end()
        // }
    }
    next()
})

app.put('/getData', function(req, res) {
    console.log(req.header)
    res.end('service2 put data')
})

app.get('/getData', function(req, res) {
    console.log(req.header)
    res.end('service2 data')
})

// 将当前文件夹作为一个静态资源。
app.use(express.static(__dirname))
app.listen(4000)
