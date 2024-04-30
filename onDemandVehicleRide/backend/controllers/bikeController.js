const Bike = require('../models/bikeCategory');

// Controller for creating a new bike
exports.createBike = async (req, res) => {
  try {
    const newBike = await Bike.create(req.body);
    res.status(201).json(newBike);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller for fetching all bikes
exports.getAllBikes = async (req, res) => {
  try {
    const bikes = await Bike.find();
    res.status(200).json(bikes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller for fetching a specific bike by ID
exports.getBikeById = async (req, res) => {
  try {
    const bike = await Bike.findById(req.params.id);
    if (!bike) {
      return res.status(404).json({ message: 'Bike not found' });
    }
    res.status(200).json(bike);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller for updating a bike by ID
exports.updateBikeById = async (req, res) => {
  try {
    const updatedBike = await Bike.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedBike) {
      return res.status(404).json({ message: 'Bike not found' });
    }
    res.status(200).json(updatedBike);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller for deleting a bike by ID
exports.deleteBikeById = async (req, res) => {
  try {
    const deletedBike = await Bike.findByIdAndDelete(req.params.id);
    if (!deletedBike) {
      return res.status(404).json({ message: 'Bike not found' });
    }
    res.status(200).json({ message: 'Bike deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
