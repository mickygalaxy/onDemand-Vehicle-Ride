const CarCategory = require('../models/carCategory');

// Create a new car category
exports.createCarCategory = async (req, res) => {
  try {
    const {
      name,
      numberOfPerson,
      numberOfLuggage,
      costPrice,
      lateFee,
      day,
      hour,
      ownerId,
      vehicleId
    } = req.body;
    const carCategory = new CarCategory({
      name,
      numberOfPerson,
      numberOfLuggage,
      costPrice,
      lateFee,
      day,
      hour,
      ownerId,
      vehicleId
    });
    await carCategory.save();
    res.status(201).json({ message: 'Car category created successfully', carCategory });
  } catch (error) {
    console.error('Error creating car category:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update an existing car category
exports.updateCarCategory = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const updates = req.body;
    const options = { new: true }; // Return the updated car category
    const updatedCarCategory = await CarCategory.findByIdAndUpdate(categoryId, updates, options);
    if (!updatedCarCategory) {
      return res.status(404).json({ error: 'Car category not found' });
    }
    res.status(200).json({ message: 'Car category updated successfully', carCategory: updatedCarCategory });
  } catch (error) {
    console.error('Error updating car category:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete a car category
exports.deleteCarCategory = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const deletedCarCategory = await CarCategory.findByIdAndDelete(categoryId);
    if (!deletedCarCategory) {
      return res.status(404).json({ error: 'Car category not found' });
    }
    res.status(200).json({ message: 'Car category deleted successfully', carCategory: deletedCarCategory });
  } catch (error) {
    console.error('Error deleting car category:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
