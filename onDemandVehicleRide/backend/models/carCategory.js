const mongoose = require('mongoose');

const carCategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  numberOfPerson: { type: Number },
  numberOfLuggage: { type: Number },
  costPrice: { type: Number },
  lateFee: { type: Number },
  day: { type: Number },
  hour: { type: Number },  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Provider' },// Reference to Provider model
  vehicleId: { type: mongoose.Schema.Types.ObjectId, ref: 'vehicle' } // Reference to Provider model

});

module.exports = mongoose.model('CarCategory', carCategorySchema);
