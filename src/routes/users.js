var express = require('express');
var router = express.Router();
import UserController from '../controllers/user.controller';
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup',
  UserController.signup,
)

module.exports = router;
