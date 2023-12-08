// 'use strict';
// const express = require("express")
// const app = express()

// /////////////////////////////////////////////////
// // 基础使用
// /////////////////////////////////////////////////
// // 默认根路径
// app.get("/", (req, res) => {
//     console.log("->", req.url)
//     res.send("<h1>Helo</h1>")
// })

// // 重定向路径
// app.get("/blog", (req, res) => {
//     res.redirect("/")
// })

// // 返回json格式，API主用
// app.get("/json", (req, res) => {
//     res.json({
//         result: 'ok'
//     })
// })

// // 返回http代码
// app.get("/sitemap", (req, res) => {
//     res.redirect(301, "/")
// })

// // 返回404
// app.get("/adult", (req, res) => {
//     res.status(404).end()
// })

// // POST请求
// // npm install body-parser --save
// const bodyParser = require('body-parser')
// app.use(bodyParser.urlencoded({
//     extended: true
// }));
// app.use(bodyParser.json());
// app.post("/login", (req, res) => {
//     console.log(req.body)
//     res.json({
//         post_result: 'ok',
//         body: req.body,
//     })
// })
// // POST测试
// // curl -X POST -H "Content-Type: application/json" -d '{"uid":"koma", "pwd":"12345678"}' http://localhost:3000/login

// /////////////////////////////////////////////////
// // 显示一些常用数据
// /////////////////////////////////////////////////
// const http = require('http')
// app.get("/info", (req, res) => {
//     res.json({
//         // HTTP方法
//         methods: http.METHODS,
//         // HTTP状态代码
//         status_ocdes: http.STATUS_CODES,
//         // 显示请求头
//         headers: req.headers,
//         // 显示主机名
//         hostname: req.hostname,
//         // 显示请求URL
//         url: req.url,
//         // 请求路径
//         path: req.path,
//         // 请求IP
//         ip: req.ip,
//         // 请求方法
//         method: req.method,
//         // 请求协议：http,https
//         protocol: req.protocol,
//         // 域名数组
//         subdomains: req.subdomains,
//         // 请求串
//         query: req.query,
//         // 请求参数
//         params: req.params,
//         // 请求表单数据
//         body: req.body,
//     })
// })


// /////////////////////////////////////////////////
// // 定义中间件(进阶)
// /////////////////////////////////////////////////
// const debug = (req, res, next) => {
//     console.log("middleware.debug ->", req.method, req.url)
//     next()
// }
// // 应用 debug 中间件
// app.use(debug)

// app.get('/', (req, res) => {
//     res.send("Helo")
// })

// // 认证信息检测中间件
// const auth = (req, res, next) => {
//     console.log("middleware.auth ->", req.method, req.url, req.query)
//     if (req.query.uid == "koma")
//         next()
//     else
//         res.status(403).end()
// }

// app.get("/admin", auth, (req, res) => {
//     res.send("管理员区")
// })

// /////////////////////////////////////////////////
// // 加入 CORS 功能 => 跨域资源共享
// // npm install cors --save
// const cors = require("cors")
// app.use(cors()) // 全部API访问许可, https://github.com/expressjs/cors

// // 仅 https://api.komavideo.com 可用
// // var corsOptions = {
// //     origin: 'https://api.komavideo.com',
// //     optionsSuccessStatus: 200
// // }
// // app.use(cors(corsOptions))

// app.get("/search", (req, res) => {
//     res.send("search is good.")
// })
// // curl -I http://127.0.0.1:3000/search

// // Done.

// /////////////////////////////////////////////////
// // 启动服务
// /////////////////////////////////////////////////
// const PORT = process.env.PORT || 3000
// app.listen(PORT, (err) => {
//     if (err) {
//         console.error("我去，出错啦！",)
//     }
//     console.log("正常服务中...", "http://127.0.0.1:" + PORT)
// })