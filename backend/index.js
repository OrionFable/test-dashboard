// backend/index.js
const express = require("express");
const cors = require("cors");
const players = require("./data");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// API Endpoints
app.get("/api/players", (req, res) => {
  res.json(players);
});

app.get("/api/players/:id", (req, res) => {
  const playerId = parseInt(req.params.id);
  const player = players.find((p) => p.id === playerId);
  if (player) {
    res.json(player);
  } else {
    res.status(404).json({ message: "Player not found" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
