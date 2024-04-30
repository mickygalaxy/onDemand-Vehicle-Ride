const PaymentDetails = require('../models/paymentDetails');

// Create a new payment detail
exports.createPaymentDetail = async (req, res) => {
  try {
    const { transactionId, paymentMethod, amount, totalLateFee, status } = req.body;
    const paymentDetail = new PaymentDetails({
      transactionId,
      paymentMethod,
      amount,
      totalLateFee,
      status
    });
    await paymentDetail.save();
    res.status(201).json({ message: 'Payment detail created successfully', paymentDetail });
  } catch (error) {
    console.error('Error creating payment detail:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update an existing payment detail
exports.updatePaymentDetail = async (req, res) => {
  try {
    const transactionId = req.params.transactionId;
    const updates = req.body;
    const options = { new: true }; // Return the updated payment detail
    const updatedPaymentDetail = await PaymentDetails.findOneAndUpdate({ transactionId }, updates, options);
    if (!updatedPaymentDetail) {
      return res.status(404).json({ error: 'Payment detail not found' });
    }
    res.status(200).json({ message: 'Payment detail updated successfully', paymentDetail: updatedPaymentDetail });
  } catch (error) {
    console.error('Error updating payment detail:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete a payment detail
exports.deletePaymentDetail = async (req, res) => {
  try {
    const transactionId = req.params.transactionId;
    const deletedPaymentDetail = await PaymentDetails.findOneAndDelete({ transactionId });
    if (!deletedPaymentDetail) {
      return res.status(404).json({ error: 'Payment detail not found' });
    }
    res.status(200).json({ message: 'Payment detail deleted successfully', paymentDetail: deletedPaymentDetail });
  } catch (error) {
    console.error('Error deleting payment detail:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
