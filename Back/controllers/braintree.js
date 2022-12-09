const User = require('../models/user');
const braintree = require('braintree');
require('dotenv').config();

var gateway = braintree.connect({
  environment:  braintree.Environment.Sandbox,
  merchantId:   '969qdtk3srrgz6hm',
  publicKey:    'thz7yh8pvnq5sxcd',
  privateKey:   '2b921abd69cdfd233f6ed91679cfb9b3'
});

exports.generateToken = (req, res) => {
  gateway.clientToken.generate({}, function (err, response) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(response);
    }
  });
};

exports.processPayment = (req, res) => {
  let nonceFromTheClient = req.body.paymentMethodNonce;
  let amountFromTheClient = req.body.amount;
  // charge
  let newTransaction = gateway.transaction.sale(
    {
      amount: amountFromTheClient,
      paymentMethodNonce: nonceFromTheClient,
      options: {
        submitForSettlement: true,
      },
    },
    (error, result) => {
      if (error) {
        res.status(500).json(error);
      } else {
        res.json(result);
      }
    }
  );
};
