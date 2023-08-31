import "./Portfolio.css";
import SimplifiedPortfolio from "../SimplifiedPortfolio/SimplifiedPortfolio.js";
import { getGitHubRepos } from "../../requests.js";
import { useEffect, useState } from "react";
import emptyPhoto from "../../Assets/emptyPhoto.png";
import * as preview from "../../Assets/PortfolioThumbnail/index.js";

function Portfolio() {
  useEffect(() => {
    fetchRepos();
  }, []);

  const [portfolioData, setPortfolioData] = useState({});
  const fetchRepos = async () => {
    const data = await getGitHubRepos();
    setPortfolioData(data);
  };

  return (
    <div className="tiles__wrap">
      {Object.entries(portfolioData).map( item =>
        <SimplifiedPortfolio name={item[1].name} key={item[1].id} img={preview[item[1].name]??emptyPhoto}/>
        )}
    </div>
  )
}

export default Portfolio;
