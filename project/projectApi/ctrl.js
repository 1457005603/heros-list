const conn = require('./db.js');
const ctrl = {
    getAllheros: (req, res) => {
        //查询数据库语句---按照id升序排列
        let sql = 'select * from heros order by id asc';
        //数据库方法调用语句
        conn.query(sql, (err, result) => {
            //当发生错误时返回一个错误的对象信息返回到客户端
            if (err) return res.send({ status: 500, msg: err.message, data: null })
                //当成功时返回一个成功信息的对象到客户端
            res.send({ status: 200, msg: "成功了鸭", data: result });
        })
    },
    addheros: (req, res) => {
        let hreos = req.body;

        let time = new Date(),

            y = time.getFullYear().toString().padStart(2, '0'),

            m = (time.getMonth() + 1).toString().padStart(2, '0'),

            d = time.getDate().toString().padStart(2, '0'),

            s = time.getHours().toString().padStart(2, '0'),

            f = time.getMinutes().toString().padStart(2, '0'),

            mm = time.getSeconds().toString().padStart(2, '0');

        hreos.ctime = y + '-' + m + '-' + d + '-' + s + ':' + f + ':' + mm;
        console.log(hreos);
        const sql = 'insert into heros set ?';
        conn.query(sql, hreos, (err, result) => {
            if (err) return res.send({ status: 500, msg: err.message, data: null })
            res.send({ status: 200, msg: '成功了鸭', data: null })
        })
    },
    gethores: (req, res) => {
        let id = req.params.id;
        console.log(id);

        let sql = 'select * from heros where id= ?';
        conn.query(sql, id, (err, result) => {
            if (err) return res.send({ status: 500, msg: err.message, data: null })
            res.send({ status: 200, msg: '成功了鸭', data: result })
        })
    },
    updatayx: (req, res) => {
        let id = req.params.id;
        let data = req.body;
        let sql = 'update heros set ? where id = ?';
        conn.query(sql, [data, id], (err, result) => {
            if (err) return res.send({ status: 500, msg: err.message, data: null })
            res.send({ status: 200, msg: '成功了鸭', data: null })
        })

    },
    delheros: (req, res) => {
        let id = req.params.id;
        console.log(id);
        let sql = 'update heros set isdel=1 where id = ?';
        conn.query(sql, id, (err, result) => {
            if (err) return res.send({ status: 500, msg: err.message, data: null })
            res.send({ status: 200, msg: '成功了鸭', data: null })
        })
    },
    test: (req, res) => {
        res.send('您请求的api获取成功');

    }








};

module.exports = ctrl;