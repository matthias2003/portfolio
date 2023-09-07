import "./SimplifiedPortfolio.css";
import { Link } from "react-router-dom";

function SimplifiedPortfolio({ name, img}) {
  return (
    <Link to={`/portfolio/${name}`}>
      <div className="tiles">
        <p>{name}</p>
        <div className="image__box" >
          <img src={img} alt="Preview"/>
        </div>
      </div>
    </Link>
  );
}

export default SimplifiedPortfolio;
