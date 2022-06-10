var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen(3000, function () {
  console.log(`DB port: ${process.env.DB_PORT}`);
  console.log(`DB host: ${process.env.DB_HOST}`);
  console.log(`DB database: ${process.env.DB_DATABASE}`);
})

module.exports = app;
