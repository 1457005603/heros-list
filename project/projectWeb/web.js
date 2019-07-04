// 引入框架
const express = require('express');
//服务器实例
const app = express();

const cors = require('cors');

app.use(cors());


//中间件进行静态资源托管
app.use('/goudan', express.static('./views'))

app.all("*", function(req, res, next) {
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    next();
});

app.listen(3006, () => {
    console.log('正在监听3006端口-----')

})