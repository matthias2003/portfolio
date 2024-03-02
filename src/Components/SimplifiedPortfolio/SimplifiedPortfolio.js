import "./SimplifiedPortfolio.css";


function SimplifiedPortfolio({ name, img}) {

    let changedName = "";
    for (let letter of name) {
        if (letter === letter.toUpperCase() ) {
            changedName += "-";
            changedName += letter.toLowerCase();
        } else {
            changedName += letter;
        }
    }

    return (
        <div className="tiles" onClick={() => { window.location.href = `https://${changedName}.maciejkloda.pl`}}>
            <p>{name}</p>
            <div className="image__box" >
                <img src={img} alt="Preview"/>
            </div>
        </div>
    )
}

export default SimplifiedPortfolio;