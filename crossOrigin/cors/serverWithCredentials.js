/**
* with cookie
* PUT,非简单请求，要先做预检请求。询问当前网页所在的域名是否在服务器的许可名单中。
*/

let express = require('express');
let app = express();
let whiteList = ['http://localhost:63342'];


app.use(function(req, res, next) {
    let origin = req.headers.origin;
    if (req.headers.cookie) {
        console.log('cookie: ', req.headers.cookie);
    }
    if (whiteList.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
        res.setHeader('Access-Control-Allow-Methods', 'PUT');
        res.setHeader('Access-Control-Allow-Credentials', true);
        if(req.methods === 'OPTIONS') {
            req.end();
        }
    }
    next();
});

app.put('/getData', function(req, res) {
    res.end('service2 put data');
});

// 将当前文件夹作为一个静态资源。
app.use(express.static(__dirname));
app.listen(4000);
