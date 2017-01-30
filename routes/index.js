var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET keyword_usage page. */
router.get('/keyword_usage', function(req, res, next) {
  res.render('keyword_usage');
});

/* GET home page. */
router.get('/conversations', function(req, res, next) {
  res.render('conversations');
});

module.exports = router;
