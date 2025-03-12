"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlayerById = exports.getAllPlayers = void 0;
const soccerStats_1 = require("../mocks/soccerStats");
// Get all players
const getAllPlayers = (req, res) => {
    console.log("getallplayer====>", req.body, soccerStats_1.soccerPlayers);
    res.json(soccerStats_1.soccerPlayers);
};
exports.getAllPlayers = getAllPlayers;
// Get a player by name
const getPlayerById = (req, res) => {
    console.log("===============", req.params);
    const playerId = parseInt(req.params.id, 10);
    console.log("playerId========>", playerId);
    const player = soccerStats_1.soccerPlayers.find((p) => p.id === playerId);
    if (!player) {
        return res.status(404).json({ message: "Player not found" });
    }
    res.json(player);
};
exports.getPlayerById = getPlayerById;
