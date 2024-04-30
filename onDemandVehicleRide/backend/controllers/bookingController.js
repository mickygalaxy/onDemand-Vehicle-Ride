const Booking = require('../models/booking');

// Create a new booking
exports.createBooking = async (req, res) => {
  try {
    const { bookingId, rentalDate, returnDate, totalCost, vehicleId, renterId, rentalCompanyId } = req.body;
    const booking = new Booking({
      bookingId,
      rentalDate,
      returnDate,
      totalCost,
      vehicleId,
      renterId,
      rentalCompanyId
    });
    await booking.save();
    res.status(201).json({ message: 'Booking created successfully', booking });
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update an existing booking
exports.updateBooking = async (req, res) => {
  try {
    const bookingId = req.params.bookingId;
    const updates = req.body;
    const options = { new: true }; // Return the updated booking
    const updatedBooking = await Booking.findOneAndUpdate({ bookingId }, updates, options);
    if (!updatedBooking) {
      return res.status(404).json({ error: 'Booking not found' });
    }
    res.status(200).json({ message: 'Booking updated successfully', booking: updatedBooking });
  } catch (error) {
    console.error('Error updating booking:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete a booking
exports.deleteBooking = async (req, res) => {
  try {
    const bookingId = req.params.bookingId;
    const deletedBooking = await Booking.findOneAndDelete({ bookingId });
    if (!deletedBooking) {
      return res.status(404).json({ error: 'Booking not found' });
    }
    res.status(200).json({ message: 'Booking deleted successfully', booking: deletedBooking });
  } catch (error) {
    console.error('Error deleting booking:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
