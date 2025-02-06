const express = require("express");
const Cart = require("./Cart_model"); // Import Cart Model
const FoodItem = require("./FoodItem"); // Import Food Model
const router = express.Router();

// Add item to cart
router.post("/add", async (req, res) => {
  try {
    const { userId, foodId, quantity } = req.body;

    // Check if food item exists
    const foodItem = await FoodItem.findById(foodId);
    if (!foodItem) return res.status(404).json({ message: "Food item not found" });

    // Check if item already exists in cart
    let cartItem = await Cart.findOne({ userId, foodId });
    if (cartItem) {
      cartItem.quantity += quantity;
      await cartItem.save();
    } else {
      cartItem = new Cart({ userId, foodId, quantity });
      await cartItem.save();
    }

    res.json({ message: "Item added to cart", cartItem });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Get cart items for a user
router.get("/:userId", async (req, res) => {
  try {
    const cartItems = await Cart.find({ userId: req.params.userId }).populate("foodId");
    res.json(cartItems);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Update cart item quantity
router.put("/:cartId", async (req, res) => {
  try {
    const { quantity } = req.body;
    const cartItem = await Cart.findByIdAndUpdate(req.params.cartId, { quantity }, { new: true });

    if (!cartItem) return res.status(404).json({ message: "Cart item not found" });

    res.json(cartItem);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Remove item from cart
router.delete("/:cartId", async (req, res) => {
  try {
    const cartItem = await Cart.findByIdAndDelete(req.params.cartId);
    if (!cartItem) return res.status(404).json({ message: "Cart item not found" });

    res.json({ message: "Item removed from cart" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Clear cart for a user
router.delete("/clear/:userId", async (req, res) => {
  try {
    await Cart.deleteMany({ userId: req.params.userId });
    res.json({ message: "Cart cleared" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
