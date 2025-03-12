import { Request, Response } from "express";
import { soccerPlayers } from "../mocks/soccerStats";

// Get all players
export const getAllPlayers = (req: Request, res: Response) => {
  res.json(soccerPlayers);
};

// Get a player by name
export const getPlayerById = (req: Request, res: Response) => {
  const playerId = parseInt(req.params.id, 10);
  const player = soccerPlayers.find((p) => p.id === playerId);

  if (!player) {
    return res.status(404).json({ message: "Player not found" });
  }

  res.json(player);
};
