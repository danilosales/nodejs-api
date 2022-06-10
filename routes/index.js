var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(`Hello World!\nDB port: ${process.env.DB_PORT}\nDB host: ${process.env.DB_HOST}\nDB database: ${process.env.DB_DATABASE}`);
});

module.exports = router;
