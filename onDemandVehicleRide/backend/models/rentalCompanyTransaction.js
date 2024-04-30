const mongoose = require('mongoose');

const rentalCompanyTransactionSchema = new mongoose.Schema({
  transactionId: { type: String, required: true, unique: true },
  rentalDate: { type: Date, required: true },
  returnDate: { type: Date, required: true },
  totalCost: { type: Number, required: true },
  bookingId: { type: mongoose.Schema.Types.ObjectId, ref: 'Booking', required: true }, // Reference to Booking model
  rentalCompanyId: { type: mongoose.Schema.Types.ObjectId, ref: 'RentalCompany', required: true }, // Reference to RentalCompany model
});

module.exports = mongoose.model('RentalCompanyTransaction', rentalCompanyTransactionSchema);
