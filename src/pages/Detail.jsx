import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPlayerById } from "../API";

function Detail() {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    fetchPlayerById(id)
      .then((data) => setData(data.data.player))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="detail-page">
      <img src={data.imageUrl} />
      <p>
        Name : {data.name} ID :({data.id})
      </p>
      <p>Breed: {data.breed} </p>
      <p>Status : {data.status}</p>
    </div>
  );
}

export default Detail;
