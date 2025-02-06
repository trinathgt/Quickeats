const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const authRoutes = require("./auth");
const foodRoutes = require("./food");
const cartRoutes = require("./cart");
const orderRoutes = require("./Order");

const app = express();

// ✅ Middleware
app.use(express.json());
app.use(cors());

// ✅ Routes
app.use("/api/auth", authRoutes);  // Fix: Use `/api/auth` for authentication
app.use("/api/food", foodRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB Connection Error:", err));

app.get("/", (req, res) => {
  res.send("API is running...");
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
