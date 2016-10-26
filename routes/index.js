var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.session.page_views){
        req.session.page_views++;
        res.send("You visited this page " + req.session.page_views + " times ANDDDD this is req.session:  " + req.session);
    }
    req.session.page_views = 1;
    // req.session.cookie.maxAge = 5000
    res.send("Welcome to this page for the first time!");
  // res.render('index', { title: 'Express' });
});

module.exports = router;
