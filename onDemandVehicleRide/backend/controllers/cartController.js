const Cart = require('../models/cart');

// Add item to user's cart
exports.addItemToCart = async (req, res) => {
  try {
    const { userId, bookingId } = req.body;

    const cart = await Cart.findOneAndUpdate(
      { userId },
      { $addToSet: { items: bookingId } }, // Add the bookingId to the items array if not already present
      { upsert: true, new: true } // Create a new cart if not already present
    );

    res.status(200).json({ message: 'Item added to cart successfully', cart });
  } catch (error) {
    console.error('Error adding item to cart:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Remove item from user's cart
exports.removeItemFromCart = async (req, res) => {
  try {
    const { userId, bookingId } = req.body;

    const cart = await Cart.findOneAndUpdate(
      { userId },
      { $pull: { items: bookingId } }, // Remove the bookingId from the items array
      { new: true }
    );

    if (!cart) {
      return res.status(404).json({ error: 'Cart not found' });
    }

    res.status(200).json({ message: 'Item removed from cart successfully', cart });
  } catch (error) {
    console.error('Error removing item from cart:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get user's cart contents
exports.getCartContents = async (req, res) => {
  try {
    const { userId } = req.params;

    const cart = await Cart.findOne({ userId }).populate('items');

    if (!cart) {
      return res.status(404).json({ error: 'Cart not found' });
    }

    res.status(200).json({ cart });
  } catch (error) {
    console.error('Error fetching cart contents:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
