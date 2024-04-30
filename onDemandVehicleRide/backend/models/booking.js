const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  bookingId: { type: String, required: true, unique: true },
  rentalDate: { type: Date, required: true },
  returnDate: { type: Date, required: true },
  totalCost: { type: Number, required: true },
  vehicleId: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle', required: true }, // Reference to Vehicle model
  renterId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to User model
  rentalCompanyId: { type: mongoose.Schema.Types.ObjectId, ref: 'RentalCompany', required: true }, // Reference to RentalCompany model
  // Add any additional fields as needed
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled'],
    default: 'pending'
}
});

module.exports = mongoose.model('Booking', bookingSchema);
