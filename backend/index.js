// backend/index.js
const express = require("express");
const cors = require("cors");
const players = require("./data");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
