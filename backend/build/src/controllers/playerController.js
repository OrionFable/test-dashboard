"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlayerById = exports.getAllPlayers = void 0;
const soccerStats_1 = require("../mocks/soccerStats");
// Get all players
const getAllPlayers = (req, res) => {
    res.json(soccerStats_1.soccerPlayers);
};
exports.getAllPlayers = getAllPlayers;
// Get a player by name
const getPlayerById = (req, res) => {
    const playerId = parseInt(req.params.id, 10);
    const player = soccerStats_1.soccerPlayers.find((p) => p.id === playerId);
    if (!player) {
        return res.status(404).json({ message: "Player not found" });
    }
    res.json(player);
};
exports.getPlayerById = getPlayerById;
