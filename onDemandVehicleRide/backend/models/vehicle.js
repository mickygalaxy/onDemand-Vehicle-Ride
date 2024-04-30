const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  registrationNumber: { type: String, required: true, unique: true },
  availabilityFlag: { type: Boolean, default: true },
  modelYear: { type: Number, required: true },
  model: { type: String, required: true },
  mileage: { type: Number },
  vehicleImage: { type: String },
  vehicleSegment: { type: String },
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Provider' } // Reference to Provider model
});

module.exports = mongoose.model('Vehicle', vehicleSchema);
