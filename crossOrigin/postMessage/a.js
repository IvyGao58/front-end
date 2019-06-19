let express = require('express')
let app = express()

// 将当前文件夹作为一个静态资源。
app.use(express.static(__dirname))
app.listen(3000)
