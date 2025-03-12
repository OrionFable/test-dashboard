import express from "express";
import {
  getAllPlayers,
  getPlayerById,
  createPlayer,
  updatePlayer,
  deletePlayer
} from "../controllers/playerController";

const router = express.Router();

// Routes
router.get("/", getAllPlayers); // GET all players
router.get("/:id", getPlayerById); // GET player by ID
router.post("/", createPlayer); // CREATE a new player
router.put("/:id", updatePlayer); // UPDATE an existing player
router.delete("/:id", deletePlayer); // DELETE a player

export default router;
