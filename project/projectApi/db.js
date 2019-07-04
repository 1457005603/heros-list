//导入数据库模块
const mysql = require('mysql');

//建立服务器连接
const conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'project',
    //开启执行多条sql语句的功能
    multipleStatements: true
})

module.exports = conn;