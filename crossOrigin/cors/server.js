/**
 * without cookie
 * GET,简单请求。
 */

let express = require('express');
let app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Method', 'GET');
    next();
});

app.get('/getData', function (req, res) {
    res.send('server1 get method response');
});

app.use(express.static(__dirname));  // 将当前文件夹作为一个静态资源。
app.listen(4040);
