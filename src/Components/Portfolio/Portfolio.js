import "./Portfolio.css";
import * as thumbnail from "../../Assets/PortfolioThumbnail/index.js";
import { Link } from "react-router-dom";
import { getGitHubRepos } from "../../requests.js";
import { useEffect, useState } from "react";

function Portfolio() {
  //let portfolioData = [];

  const [portfolioData, setPortfolioData] = useState({});
  const test = 'test';

  useEffect(() => {
    fetchRepos();
  }, [test]);

  const fetchRepos = async () => {
    const data = await getGitHubRepos();
    setPortfolioData(data);
  };

  

  return (
    <div className="tiles__wrap">
      <div className="tiles">
        <p>Superhero App</p>
        {console.log(portfolioData)}
        <div className="image__box" alt="">
          <Link to={`/portfolio/1`}>
            {" "}
            <img src={thumbnail.superHeroApp} alt="SuperHeroApp screenshot" />
          </Link>
        </div>
      </div>

      <div className="tiles">
        <p>Weather App</p>
        <div className="image__box">
          <img src={thumbnail.weatherApp} alt="WeatherApp screenshot" />
        </div>
      </div>
      <div className="tiles">
        <p>Todo List</p>
        <div className="image__box">
          <img src={thumbnail.todoList} alt="TodoList screenshot" />
        </div>
      </div>
      <div className="tiles">
        <p>Tv Maze</p>
        <div className="image__box">
          <img src={thumbnail.movieApp} alt="TvMaze screenshot" />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
