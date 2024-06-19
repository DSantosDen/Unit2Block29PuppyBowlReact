import { Link } from "react-router-dom";
import { deletePlayer } from "../API/index";

function Card({ img, name, id }) {
  const deletePlayerAction = () => {
    deletePlayer(id)
      .then((res) => {
        let element = document.getElementById("card-" + id);
        element.remove();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div id={"card-" + id} className="card">
      <img src={img} />
      <h3>
        {name} ({id})
      </h3>
      <div className="btn-section">
        <Link to={"/" + id} className="detail-btn">
          See Details
        </Link>
        <button className="delete-btn" onClick={deletePlayerAction}>
          Delete
        </button>
      </div>
    </div>
  );
}
export default Card;
