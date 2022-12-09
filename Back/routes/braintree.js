const express = require('express');
const router = express.Router();

const { requireSignin, isAuth } = require('../controllers/auth');
const { userById } = require('../controllers/user');
const { generateToken, processPayment } = require('../controllers/braintree');


router.post(
  '/braintree/payment/:userId',
  requireSignin,
  isAuth,
  processPayment
);
router.get('/braintree/getToken/:userId', requireSignin, isAuth, generateToken);

router.param('userId', userById);

module.exports = router;
