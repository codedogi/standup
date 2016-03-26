var express = require('express');
var router = express.Router();
var standupCtrl = require('../controllers/standup.server.controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  return standupCtrl.list(req, res);
});

/* POST filter by member name - home page. */
router.post('/', function(req, res) {
  return standupCtrl.filterByMember(req, res)
});

/* GET New Note page. */
router.get('/newnote', function(request, response) {
  return standupCtrl.getNote(request, response);
});

/* POST New Note page. */
router.post('/newnote', function(request, response) {
  return standupCtrl.create(request, response);
});

module.exports = router;
