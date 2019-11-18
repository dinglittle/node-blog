// app.get('/', function(req, res) {
//   res.send('hello express')
// })
/**
 * req.query: 解析后的 url 中的 querystring , 如 ?name=haha, req.query 的值 { name:'haha' }
 * req.params: 解析 url 中的占位符, 如 /:name , req.params 的值为 {name:'haha'}
 * req.body: 解析后请全体, 需使用相关模块,   如 body-parser
 */
// app.get('/users/:name', function(req, res) {
//   res.send('hello - ' + req.params.name)
// })
/**
 * 以上代码的意思是：当访问根路径时，依然返回 hello,
 * express，当访问如 localhost:3000/users/nswbmw 路径时，返回 hello, nswbmw。
 * 路径中 :name 起了占位符的作用，这个占位符的名字是 name，
 * 可以通过 req.params.name 取到实际的值。
 */

const path = require('path')
const express = require('express')
const app = express()
// 路由
const indexRouter = require('./routes/index')
const userRouter = require('./routes/users')

// 设置存放模板文件的目录
app.set('views', path.join(__dirname, 'views'))
// 通过 app.set 设置模板引擎为 ejs 和存放模板的目录
app.set('view engine', 'ejs') // 设置模板引擎为 ejs

app.use('/', indexRouter)
app.use('/users', userRouter)
app.listen(3000)
/**
 * 启动一个服务 输出内容 , 端口 3000
 */
