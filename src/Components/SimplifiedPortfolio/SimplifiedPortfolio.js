import "./SimplifiedPortfolio.css";

function SimplifiedPortfolio({ name, img}) {
  return (
    <div className="tiles">
      <p>{name}</p>
      <div className="image__box" alt="">
        <img src={img}/>
      </div>
    </div>
  );
}

export default SimplifiedPortfolio;
