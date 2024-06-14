import { useState } from "react";

function NewPlayerForm() {
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [team, setTeam] = useState("");

  console.log("Current state:", { name, owner, team });

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Submitting form with:", { name, owner, team });
    const response = await fetch(
      "https://fsa-puppy-bowl.herokuapp.com/api/2402-FTB-ET-WEB-PT/players",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, owner, team }),
      }
    );
    const data = await response.json();
    console.log("Received response:", data);
  };

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
        value={owner}
        onChange={(e) => setOwner(e.target.value)}
        placeholder="Owner"
        required
        className="input-field"
      />
      <input
        type="text"
        value={team}
        onChange={(e) => setTeam(e.target.value)}
        placeholder="Team"
        required
        className="input-field"
      />
      <button type="submit" className="submit-button">
        Create Player
      </button>
    </form>
  );
}

export default NewPlayerForm;
