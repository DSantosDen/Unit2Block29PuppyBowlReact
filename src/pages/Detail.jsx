// Importing necessary hooks and functions from React and external modules
import { useEffect, useState } from "react"; // useState for state management, useEffect for side effects (like fetching data)
import { useParams } from "react-router-dom"; // useParams to access route parameters
import { fetchPlayerById } from "../API"; // Custom function to fetch player data by ID

// Functional component named Detail
function Detail() {
  // Destructuring the 'id' parameter from the URL using useParams hook
  const { id } = useParams();

  // Initializing state to hold the fetched player data
  const [data, setData] = useState({});

  // Using useEffect hook to perform side effects - fetching player data when the component mounts
  useEffect(() => {
    // Fetching player data by ID and updating the state with the received data
    fetchPlayerById(id)
      .then((response) => {
        // Assuming the API returns an object with a nested structure where player details are found under 'player'
        const playerData = response.data.player;
        setData(playerData); // Updating state with the player data
      })
      .catch((error) => console.log(error)); // Logging errors if any occur during the fetch operation
  }, []); // Empty dependency array means this effect runs once on mount

  // Rendering the fetched player data
  return (
    <div className="detail-page">
      {/* Displaying the player's image */}
      <img src={data.imageUrl} alt={`Image of ${data.name}`} />

      {/* Displaying the player's name and ID */}
      <p>
        Name: {data.name} ID: ({data.id})
      </p>

      {/* Displaying the player's breed */}
      <p>Breed: {data.breed}</p>

      {/* Displaying the player's status */}
      <p>Status: {data.status}</p>
    </div>
  );
}

// Exporting the Detail component so it can be imported and used elsewhere
export default Detail;
