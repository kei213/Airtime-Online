const router = require("express").Router();
const User = require("../models/User");
const Transaction = require("../models/Transaction");

// save a single user transaction
router.post("/singletransaction", async (req, res) => {
  try {
    const transaction = new Transaction(req.body);
    await transaction.save();
    res.status(201).send(transaction);
  } catch (error) {
    res.status(400).send(error);
  }
});

// get all user transactions
router.post("/usertransactions", async (req, res) => {
  const userId = req.body.userId;

  try {
    Transaction.find({ user: userId })
      .populate("user")
      .then((transactions) => {
        res.status(201).send(transactions);
      });
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
