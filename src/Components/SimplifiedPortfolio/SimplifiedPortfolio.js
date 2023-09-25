import "./SimplifiedPortfolio.css";

function SimplifiedPortfolio({ name, img}) {
  return (
      <div className="tiles" onClick={() => { window.location.href = `https://${name}-kloda.on.fleek.co`}}>
        <p>{name}</p>
        <div className="image__box" >
          <img src={img} alt="Preview"/>
        </div>
      </div>
  );
}

export default SimplifiedPortfolio;
