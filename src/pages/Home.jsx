// Importing necessary hooks and functions from React and other files
import { useEffect, useState } from "react"; // Hooks from React
import { fetchPlayerByName, fetchPlayers } from "../API"; // Function to fetch player data from API
import Card from "../component/Card"; // Component to display each player

// This is a functional component in React named 'Home'
function Home() {
  /* 'useState' is a Hook that allows you to have state variables in functional components.
 We're setting 'data' as an empty array to start with, and 'setData' is the function we'll use to update 'data'. */
  const [ogdata, setOgData] = useState([]);
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  /* 'useEffect' is a Hook that gets executed after every completed render.
Here, it's used to fetch player data when the component mounts, and then sets that data using 'setData'.*/
  useEffect(() => {
    fetchPlayers() // Fetching player data
      .then((data) => {
        setData(data);
        setOgData(data);
      }) // If successful, update 'data' with the received data
      .catch((err) => console.log(err)); // If there's an error, log it
  }, []); // The empty array means this effect runs once on mount and not on updates

  function david(event) {
    setText(event.target.value);
  }

  const searchApi = () => {
    let filterData = ogdata.filter((obj) =>
      obj.name.toLowerCase().includes(text.toLowerCase())
    );
    setData(filterData);
  };

  /* The component returns a div containing a list of 'Card' components,one for each player object in the 'data' array.*/
  return (
    <>
      <div className="search-wrapper">
        <input placeholder="Name of Dog" onChange={david} />
        <button onClick={searchApi}>Search</button>
        <button
          style={{ background: "yellow", marginLeft: 5 }}
          onClick={() => setData(ogdata)}
        >
          Reset
        </button>
      </div>

      <div className="card-wrapper">
        {data.map((obj) => (
          // For each 'obj' in 'data', a 'Card' component is created with props for 'img', 'name', and 'id'.
          <Card img={obj.imageUrl} name={obj.name} id={obj.id} />
        ))}
      </div>
    </>
  );
}

// The 'Home' component is exported for use in other parts of the application.
export default Home;
