const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true
  },
  product_name: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
},
  {timestamps: true}
);

const Transaction = mongoose.model('Transaction', TransactionSchema);

module.exports = Transaction