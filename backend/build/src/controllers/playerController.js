"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlayerByName = exports.getAllPlayers = void 0;
const soccerStats_1 = require("../mocks/soccerStats");
// Get all players
const getAllPlayers = (req, res) => {
    res.json(soccerStats_1.soccerPlayers);
};
exports.getAllPlayers = getAllPlayers;
// Get a player by name
const getPlayerByName = (req, res) => {
    const { name } = req.params;
    const player = soccerStats_1.soccerPlayers.find((p) => p.player.toLowerCase() === name.toLowerCase());
    if (!player) {
        return res.status(404).json({ message: "Player not found" });
    }
    res.json(player);
};
exports.getPlayerByName = getPlayerByName;
