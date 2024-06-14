import { Link } from "react-router-dom";

function Card({ img, name, id }) {

  return (
    <div className="card">
      <img src={img} />
      <h3>
        {name} ({id})
      </h3>
      <div className="btn-section">
        <Link to={"/"+id} className="detail-btn">See Details</Link>
        <button className="delete-btn">Delete</button>
      </div>
    </div>
  );
}
export default Card;
