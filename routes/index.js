var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const params = {
    title: 'EmBanh'
  }
  res.render('index', params);
});

module.exports = router;
