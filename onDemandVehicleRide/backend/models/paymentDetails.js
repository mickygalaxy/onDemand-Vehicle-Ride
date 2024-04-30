const mongoose = require('mongoose');

const paymentDetailsSchema = new mongoose.Schema({
  transactionId: { type: String, required: true, unique: true },
  paymentMethod: { type: String, required: true },
  amount: { type: Number, required: true },
  paymentDate: { type: Date, default: Date.now },
  totalLateFee: { type: Number },
  status: { type: String, enum: ['Pending', 'Completed', 'Failed'], default: 'Pending' },
});

module.exports = mongoose.model('PaymentDetails', paymentDetailsSchema);
