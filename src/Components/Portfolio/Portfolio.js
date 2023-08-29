import "./Portfolio.css";
import SimplifiedPortfolio from "../SimplifiedPortfolio/SimplifiedPortfolio.js";
import { getGitHubRepos, getGithubImages } from "../../requests.js";
import { useEffect, useState } from "react";
import emptyPhoto from "../../Assets/emptyPhoto.png";

function Portfolio() {
  useEffect(() => {
    fetchRepos();
  }, []);

  const [portfolioData, setPortfolioData] = useState({});
  const [portfolioPreview, setPortfolioPreview] = useState([]);

  const fetchRepos = async () => {
    const data = await getGitHubRepos();
    setPortfolioData(data);
    fetchReposPreviews(data);
  };

  const fetchReposPreviews = async ( repoData ) => {
    let imgLink = {};

    for (const item of repoData) {
      let img = await getGithubImages(item.name);
      const regex = new RegExp('https://github.com/matthias2003/.+');
      if(img) {
        img = img.slice(0, -1);
      }
      imgLink[item.name] = regex.exec(img)
      //imgLink.push(regex.exec(img));
    }
    setPortfolioPreview(imgLink);
  }

  console.log(portfolioPreview)
  
  

  return (
    <div className="tiles__wrap">
      {Object.entries(portfolioData).map( item =>
        <SimplifiedPortfolio name={item[1].name} key={item[1].id} img={portfolioPreview[item[1].name]??emptyPhoto}/>
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
