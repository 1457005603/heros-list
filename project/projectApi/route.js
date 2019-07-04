const express = require('express');

const route = express.Router();

//导入业务逻辑模块
const ctrl = require('./ctrl');



//查询英雄接口
route.get('/getAllheros', ctrl.getAllheros)

//添加英雄接口
route.post('/addheros', ctrl.addheros)

//查询指定id的英雄
route.get('/gethores/:id', ctrl.gethores)
    //修改指定id的英雄
route.post('/updatayx/:id', ctrl.updatayx)

//根据指定id软删除数据
route.get('/delheros/:id', ctrl.delheros)
    //测试服务器
route.get('/', ctrl.test)

module.exports = route;