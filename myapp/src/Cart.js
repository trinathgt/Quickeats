import React, { useState, useEffect } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const userId = localStorage.getItem("userId");
  const [paymentMethod, setPaymentMethod] = useState("Cash");

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await fetch(`/api/cart/${userId}`);
      const data = await response.json();
      setCartItems(data.items);
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  const placeOrder = async () => {
    try {
      const response = await fetch("/api/orders/place", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
          items: cartItems.map((item) => ({
            foodId: item.foodId._id,
            quantity: item.quantity,
          })),
          totalAmount: cartItems.reduce((acc, item) => acc + item.foodId.price * item.quantity, 0),
          paymentMethod,
        }),
      });

      if (response.ok) {
        alert("Order placed successfully!");
        setCartItems([]); // Clear the cart
      } else {
        alert("Error placing order.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.foodId._id} className="cart-item">
              <p>{item.foodId.name} - {item.quantity} x ₹{item.foodId.price}</p>
            </div>
          ))}
          <select onChange={(e) => setPaymentMethod(e.target.value)} value={paymentMethod}>
            <option value="Cash">Cash</option>
            <option value="Online">Online</option>
          </select>
          <button onClick={placeOrder}>Place Order</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
