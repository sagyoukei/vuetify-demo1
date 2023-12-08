//连接数据库  1安装mysql 2创建连接
const mysql = require('mysql')

//创建数据库连接
const client =mysql.createConnection({
    host: 'localhost', //数据域名 地址
    user: 'root', // 数据名称
    password:'', // 数据库密码 xampp集成
    database: 'vue-test'
})

//检测链接是否成功

 client.connect((err) =>{
    if(err){
        console.error("连接失败"  + err.stack);
        return;
    }
    console.log("连接成功");
 });

 client.query("select * from demo",(err,result) =>{
    if(err){
        console.error("查询出错:"+ err.message )
        return;
    }
    console.log(result);
 });

//  let sql = "insert into demo values(?,?,?,?)";
//  let params = [ 4,"kagome","kagome@126.com", "higurasijinnjya"];
//   client.query(sql, params,(err,result) =>{
//     if(err){
//         console.error("插入出错:"+ err.message )
//         return;
//     }
//     });
//     console.log("插入成功");

 client.end();

//封装数据库操作语句，sql语句，参数数组arr callback成功函数结果
function sqlFun(sql, arr, callback) {
    client.query(sql,arr,function(error,result){
        if(error){
            console.log('');
            return;
        }
        callback(result)
    })
}

module.exports = sqlFun