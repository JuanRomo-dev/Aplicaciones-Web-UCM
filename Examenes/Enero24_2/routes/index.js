const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', {title: 'Enero 24_2'});
});

module.exports = router;