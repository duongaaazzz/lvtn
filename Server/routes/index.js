var express = require('express');
var router = express.Router();
var db = require('../queries');

router.get('/', function(req,res){
  res.render('index', { title:'WebAPI basic with PostgreSQL'});
});

//users
router.get('/api/users', db.getList);
router.get('/api/users/:id', db.getOne);
router.post('/api/users', db.createUser);
// router.put('/api/users/:userID', db.Edit);
// router.delete('/api/users/:userID', db.Delete);

//events
router.get('/api/events', db.getEvents);

module.exports = router;
