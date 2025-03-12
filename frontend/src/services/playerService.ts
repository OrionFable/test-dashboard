import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

export interface Player {
  id: number;
  no: number;
  player: string;
  team: string;
  position: string;
  matches_played: number;
  goals_scored: number;
  assists: number;
  yellow_cards: number;
  red_cards: number;
}

export const getAllPlayers = async (): Promise<Player[]> => {
  try {
    const response = await apiClient.get<Player[]>("/api/players");
    return response.data;
  } catch (error) {
    console.error("Error fetching players:", error);
    throw error;
  }
};

export const getPlayerById = async (id: number): Promise<Player> => {
  try {
    const response = await apiClient.get<Player>(`/api/players/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching player:", error);
    throw error;
  }
};
