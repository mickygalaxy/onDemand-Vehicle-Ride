const RentalCompanyTransaction = require('../models/rentalCompanyTransaction');

// Create a new rental company transaction
exports.createRentalCompanyTransaction = async (req, res) => {
  try {
    const { transactionId, rentalDate, returnDate, totalCost, bookingId, rentalCompanyId } = req.body;
    const rentalCompanyTransaction = new RentalCompanyTransaction({
      transactionId,
      rentalDate,
      returnDate,
      totalCost,
      bookingId,
      rentalCompanyId
    });
    await rentalCompanyTransaction.save();
    res.status(201).json({ message: 'Rental company transaction created successfully', rentalCompanyTransaction });
  } catch (error) {
    console.error('Error creating rental company transaction:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update an existing rental company transaction
exports.updateRentalCompanyTransaction = async (req, res) => {
  try {
    const transactionId = req.params.transactionId;
    const updates = req.body;
    const options = { new: true }; // Return the updated rental company transaction
    const updatedRentalCompanyTransaction = await RentalCompanyTransaction.findOneAndUpdate({ transactionId }, updates, options);
    if (!updatedRentalCompanyTransaction) {
      return res.status(404).json({ error: 'Rental company transaction not found' });
    }
    res.status(200).json({ message: 'Rental company transaction updated successfully', rentalCompanyTransaction: updatedRentalCompanyTransaction });
  } catch (error) {
    console.error('Error updating rental company transaction:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete a rental company transaction
exports.deleteRentalCompanyTransaction = async (req, res) => {
  try {
    const transactionId = req.params.transactionId;
    const deletedRentalCompanyTransaction = await RentalCompanyTransaction.findOneAndDelete({ transactionId });
    if (!deletedRentalCompanyTransaction) {
      return res.status(404).json({ error: 'Rental company transaction not found' });
    }
    res.status(200).json({ message: 'Rental company transaction deleted successfully', rentalCompanyTransaction: deletedRentalCompanyTransaction });
  } catch (error) {
    console.error('Error deleting rental company transaction:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
