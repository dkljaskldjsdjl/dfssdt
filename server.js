var express = require ('express');
var bodyParser = require('body-parser');
var newRouter = require('../routers/newRouter');
var newRouter = require('../routers/newRouter');
var newRouter = require('../routers/newRouter');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use('/', newRouter);
app.use('/', newRouter);
app.use('/', newRouter);

app.listen(8000, function () {
  console.log('gggggdfsd listening on port 8000');
};
