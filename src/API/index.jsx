//API stored in BASE_URL constant
const BASE_URL = "https://fsa-puppy-bowl.herokuapp.com/api/2402-FTB-ET-WEB-PT";

//Function fetchPlayers - fetches a list of players from the API
const fetchPlayers = async () => {
  try {
    console.log("Fetching players...");
    const response = await fetch(`${BASE_URL}/players`);
    const responseData = await response.json(); // Parse the response to JSON
    console.log("Response status fetchPlayers:", response.status);
    console.log("Players fetched successfully:", responseData);
    return responseData.data.players; // Return only the players array
  } catch (error) {
    console.error("Error fetching players:", error);
    throw error;
  }
};

//Function fetchPlayerById - fetches  a specific player by their Name
const fetchPlayerById = async (playerId) => {
  try {
    console.log(`Fetching player with ID: ${playerId}...`);
    const response = await fetch(`${BASE_URL}/players/${playerId}`);
    const data = await response.json();
    console.log("Response status:", response.status);
    console.log(`Player with ID: ${playerId} fetched successfully:`, data);
    return data;
  } catch (error) {
    console.error("Error fetching player:", error);
    throw error;
  }
};

//Function fetchPlayerByName - fetches  a specific player by their Name
const fetchPlayerByName = async (playerName) => {
  try {
    console.log(`Fetching player by name: ${playerName}...`);
    const response = await fetch(`${BASE_URL}/players/${playerName}`);
    const data = await response.json();
    console.log("Response status:", response.status);
    console.log(`Player with name: ${playerName} fetched successfully:`, data);
    return data;
  } catch (error) {
    console.error("Error fetching player:", error);
    throw error;
  }
};

//Function createPlayer - creates a new player by sending a POST request with the player’s data
const createPlayer = async (playerData) => {
  try {
    console.log("Creating player with data:", playerData);
    const response = await fetch(`${BASE_URL}/players`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: playerData.name,
        breed: playerData.breed,
        imageUrl: playerData.imageUrl,
      }),
    });
    const data = await response.json();
    console.log("Response status:", response.status);
    console.log("Player created successfully:", data);
    return data;
  } catch (error) {
    console.error("Error creating player:", error);
    throw error;
  }
};

//Function deletePlayer - deletes a player by their ID
const deletePlayer = async (playerId) => {
  try {
    console.log(`Deleting player with ID: ${playerId}...`);
    const response = await fetch(`${BASE_URL}/players/${playerId}`, {
      method: "DELETE",
    });
    console.log("Response status:", response.status);
    console.log(`Player with ID: ${playerId} deleted successfully.`);
  } catch (error) {
    console.error("Error deleting player:", error);
    throw error;
  }
};

export {
  fetchPlayers,
  fetchPlayerById,
  fetchPlayerByName,
  createPlayer,
  deletePlayer,
};
