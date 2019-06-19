let express = require('express')
let app = express();

app.listen(3000);
app.get('/say', function (req, res) {
    let {wd, cb} = req.query;
    console.log(wd);
    res.end(`${cb}('message-received')`)
});
