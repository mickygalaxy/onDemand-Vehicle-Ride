const mongoose = require('mongoose');

const bikeSchema = new mongoose.Schema({
  registrationNumber: { type: String, required: true, unique: true },
  availabilityFlag: { type: Boolean, default: true },
  modelYear: { type: Number, required: true },
  model: { type: String, required: true },
  mileage: { type: Number },
  bikeImage: { type: String },
  bikeType: { type: String },
  vehicleId: { type: mongoose.Schema.Types.ObjectId, ref: 'vehicle' }, // Reference to Provider model
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Provider' } // Reference to Provider model
});

module.exports = mongoose.model('Bike', bikeSchema);
