//导入express框架模块
const express = require('express');
//接收post请求的模块
const bodyParser = require('body-parser');
//导入允许跨域模块
const cors = require('cors');

//创建服务器对象
const app = express();
app.use(cors());

//注册接收post请求参数的中间件
app.use(bodyParser.urlencoded({ extended: false }))
    //导入路由模块
const route = require('./route.js');
//注册路由模块
app.use(route);



//开启服务器监听端口
app.listen(5003, () => {
    console.log('正在监听5003端口');
})