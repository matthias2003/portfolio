import "./SimplifiedPortfolio.css";

function SimplifiedPortfolio({ name }) {
  return (
    <div className="tiles">
      <p>{name}</p>
      <div className="image__box" alt=""></div>
    </div>
  );
}

export default SimplifiedPortfolio;
