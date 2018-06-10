const express = require('express');

//引入路由
const router = require('./routes/route.js')

const app = express();

const cors = require('cors')
app.use(cors())
app.use(express.static("public"));

app.use(router)


app.listen(4000,function () {
  console.log("数据库连接成功，端口号4000");
})
