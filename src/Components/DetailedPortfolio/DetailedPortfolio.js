import "./DetailedPortfolio.css";
import { useParams } from "react-router";

function DetailedPortfolio() {
    const { name } = useParams();
    return(
        <div className="detailes__wrap">
            <h2>{name}</h2>
            <div className="content__wrap">
                fds
            </div>
        </div>
        
    );
}

export default DetailedPortfolio;