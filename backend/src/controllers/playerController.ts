import { Request, Response } from "express";
import { soccerPlayers } from "../mocks/soccerStats";
import { SoccerPlayer } from "../interfaces/SoccerPlayer";

// Get all players
export const getAllPlayers = (req: Request, res: Response) => {
  res.json(soccerPlayers);
};

// Get a player by ID
export const getPlayerById = (req: Request, res: Response) => {
  const playerId = parseInt(req.params.id, 10);
  const player = soccerPlayers.find((p) => p.id === playerId);

  if (!player) {
    return res.status(404).json({ message: "Player not found" });
  }

  res.json(player);
};

// Create a new player
export const createPlayer = (req: Request, res: Response) => {
  const newPlayer: SoccerPlayer = req.body;

  // Validate required fields
  if (
    !newPlayer.player ||
    !newPlayer.team ||
    !newPlayer.position ||
    typeof newPlayer.matches_played !== "number" ||
    typeof newPlayer.goals_scored !== "number" ||
    typeof newPlayer.assists !== "number" ||
    typeof newPlayer.yellow_cards !== "number" ||
    typeof newPlayer.red_cards !== "number"
  ) {
    return res.status(400).json({ message: "Invalid player data" });
  }

  // Assign a unique ID to the new player
  newPlayer.id =
    soccerPlayers.length > 0
      ? soccerPlayers[soccerPlayers.length - 1].id + 1
      : 1;

  // Add the new player to the mock data
  soccerPlayers.push(newPlayer);

  res
    .status(201)
    .json({ message: "Player created successfully", player: newPlayer });
};

// Update an existing player
export const updatePlayer = (req: Request, res: Response) => {
  const playerId = parseInt(req.params.id, 10);
  const updatedData: Partial<SoccerPlayer> = req.body;

  // Find the player to update
  const playerIndex = soccerPlayers.findIndex((p) => p.id === playerId);
  if (playerIndex === -1) {
    return res.status(404).json({ message: "Player not found" });
  }

  // Update the player's data
  soccerPlayers[playerIndex] = {
    ...soccerPlayers[playerIndex],
    ...updatedData
  };

  res.json({
    message: "Player updated successfully",
    player: soccerPlayers[playerIndex]
  });
};

// Delete a player
export const deletePlayer = (req: Request, res: Response) => {
  const playerId = parseInt(req.params.id, 10);

  // Find the player to delete
  const playerIndex = soccerPlayers.findIndex((p) => p.id === playerId);
  if (playerIndex === -1) {
    return res.status(404).json({ message: "Player not found" });
  }

  // Remove the player from the mock data
  soccerPlayers.splice(playerIndex, 1);

  res.json({ message: "Player deleted successfully" });
};
