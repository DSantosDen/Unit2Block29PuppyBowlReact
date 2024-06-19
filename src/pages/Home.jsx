import { useEffect, useState } from "react";
import { fetchPlayerByName, fetchPlayers } from "../API";
import Card from "../component/Card";

function Home() {
  const [ogdata, setOgData] = useState([]);
  const [data, setData] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    fetchPlayers()
      .then((data) => {
        setData(data);
        setOgData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  function david(event) {
    setText(event.target.value);
  }

  const searchApi = () => {
    let filterData = ogdata.filter((obj) =>
      obj.name.toLowerCase().includes(text.toLowerCase())
    );
    setData(filterData);
  };

  const deletePlayerAction = (deletedPlayerId) => {
    let updatedData = data.filter((player) => player.id);
    let updatedOgData = ogdata.filter((player) => player.id);
    setData(updatedData);
    setData(updatedOgData);
  };

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
          <Card img={obj.imageUrl} name={obj.name} id={obj.id} />
        ))}
      </div>
    </>
  );
}

export default Home;
