var express = require('express');
var User = require('../schemas/user');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  User.find({}).then((users) => {
    res.render('mongoose', {users});
  }).catch((err) => {
    console.error(err);
    next(err);
  });
});

// // 위의 코드를 async/await 문법으로 표현한 방식
// router.get('/', async (req, res, next) => {
//   try {
//     const users = await User.find();
//   } catch (error) {
//     console.error(error);
//     next(error);
//   }
// });

module.exports = router;
