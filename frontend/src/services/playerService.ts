import axios from "axios";

// Use environment variable for the base URL
const API_URL = import.meta.env.VUE_APP_API_URL || "http://localhost:5000";

export const getAllPlayers = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/players`);
    return response.data;
  } catch (error) {
    console.error("Error fetching players:", error);
    throw error;
  }
};

export const getPlayerById = async (id: number) => {
  try {
    const response = await axios.get(`${API_URL}/api/players/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching player:", error);
    throw error;
  }
};
