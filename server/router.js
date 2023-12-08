
const express = require('express')
const router = express.Router()

// 导入数据库 sqlFun('sql',[], res=>{})
const sqlFun = require('./mysql')

/**
 * 获取学生列表
 */
router.get("/studentList", (req, res) => {
    const page = req.query.page || 1;

    // 查询总记录数
    const sqlLen = "SELECT COUNT(*) as count FROM demo";
    sqlFun(sqlLen, null, lenData => {
        const len = lenData[0].count;

        // 查询学生列表
        const sql = "SELECT * FROM demo ORDER BY id";
        sqlFun(sql, null, result => {
            if (result.length > 0) {
                res.send({
                    status: 200,
                    data: result,
                    pageSize: 8,
                    total: len
                });
            } else {
                res.send({
                    status: 500,
                    msg: "暂无数据"
                });
            }
        });
    });
});

module.exports = router;