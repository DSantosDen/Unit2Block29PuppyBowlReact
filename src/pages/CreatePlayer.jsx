import { useState } from "react";
import { createPlayer } from "../API/index";

function NewPlayerForm() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  console.log("Current state:", { name, breed, imageUrl });

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Submitting form with:", { name, breed, imageUrl });
    try {
      const newPlayer = await createPlayer({ name, breed, imageUrl });
      console.log("New player created:", newPlayer);
    } catch (error) {
      console.error("Error", error);
    }
  };

  /*   const response = await fetch(
    "https://fsa-puppy-bowl.herokuapp.com/api/2402-FTB-ET-WEB-PT/players",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, breed, imageUrl }),
    }
  ); 
  const data = await response.json();
  console.log("Received response:", data);
};*/

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
        className="input-field"
      />
      <input
        type="text"
        value={breed}
        onChange={(e) => setBreed(e.target.value)}
        placeholder="Breed"
        required
        className="input-field"
      />
      <input
        type="text"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        placeholder="Image URL"
        required
        className="input-field"
      />
      <button onClick={createPlayer} type="submit" className="submit-button">
        Create Player
      </button>
    </form>
  );
}

export default NewPlayerForm;
