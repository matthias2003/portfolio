import "./Portfolio.css";
import * as thumbnail from "../../Assets/PortfolioThumbnail/index.js";
import { Link } from "react-router-dom";
import SimplifiedPortfolio from "../SimplifiedPortfolio/SimplifiedPortfolio.js";
import { getGitHubRepos } from "../../requests.js";
import { useEffect, useState } from "react";

function Portfolio() {
  useEffect(() => {
    fetchRepos();
  }, []);

  const [portfolioData, setPortfolioData] = useState({});

  const fetchRepos = async () => {
    const data = await getGitHubRepos();
    setPortfolioData(data);
    console.log(data[0].name)
  };



  return (
    <div className="tiles__wrap">
      {Object.entries(portfolioData).map( item =>
        <SimplifiedPortfolio name={item[1].name} key={item[1].id} />
        )}
    </div>
    
  )
  // return (
  //   <div className="tiles__wrap">
      // <div className="tiles">
      //   <p>Superhero App</p>
      //   <div className="image__box" alt="">
      //     <Link to={`/portfolio/1`}>
      //       {" "}
      //       <img src={thumbnail.superHeroApp} alt="SuperHeroApp screenshot" />
      //     </Link>
      //   </div>
      // </div>

  //     <div className="tiles">
  //       <p>Weather App</p>
  //       <div className="image__box">
  //         <img src={thumbnail.weatherApp} alt="WeatherApp screenshot" />
  //       </div>
  //     </div>
  //     <div className="tiles">
  //       <p>Todo List</p>
  //       <div className="image__box">
  //         <img src={thumbnail.todoList} alt="TodoList screenshot" />
  //       </div>
  //     </div>
  //     <div className="tiles">
  //       <p>Tv Maze</p>
  //       <div className="image__box">
  //         <img src={thumbnail.movieApp} alt="TvMaze screenshot" />
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default Portfolio;
