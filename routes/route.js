const express = require('express');
const route = express.Router();

const index = require('../data/index.json');
const comment = require('../data/comment.json');
const item = require('../data/item.json');
const service = require('../data/service.json');

//创建路由
//首页
route.get('/index',function (req, res) {
  res.send(index)
})
//服务商
route.get('/service',function (req, res) {
  res.send(service)
})
//评价
route.get('/comment',function (req, res) {
 /* const page = req.query.page/1;
  const comments = comments.slice(page*10,10*(page+1))*/
  res.send(comment)
})
//商家信息
route.get('/item',function (req, res) {
  res.send(item)
})

//暴露
module.exports = route;