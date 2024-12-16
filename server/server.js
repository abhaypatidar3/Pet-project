const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth");
const petRoutes = require("./routes/pets");
const cors = require('cors');


// Load environment variables
dotenv.config();

// Create Express app
const app = express();
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));


// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Error connecting to MongoDB:", err));

// Default route to check server is running
app.get("/", (req, res) => {
  res.send("Pet Adoption Server is running!");
});

// Define routes
app.use("/api/auth", authRoutes);
app.use("/api/pets", petRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
