var express = require('express');
var router = express.Router();
var User = require('../models/user');
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', (req, res, next) => {
  console.log(User.create)
  console.log(req.body);
  User.create({
    username: req.body.username,
    password: req.body.password
  }).then(user => {
    console.log(user);
    user.save((err, user) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.json({
          err: err
        });
        return;
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({
          success: true,
          status: 'Registration Successful!',
          data: user
        });
      }
    })
  }).catch(err => {
    console.log(err);
  })
});


module.exports = router;