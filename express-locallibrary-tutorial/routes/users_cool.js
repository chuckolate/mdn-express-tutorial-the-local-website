var express = require('express');
var router = express.Router();

/* Challenge 1 */
router.get('/', function(req, res, next) {
	res.send('You\'re so cool');
});

module.exports = router;