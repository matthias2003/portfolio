import './Portfolio.css';
import * as thumbnail from '../../Assets/PortfolioThumbnail/index.js';

function Portfolio() {
    return(
        <div className="tiles__wrap">
            <div className="tiles">
                <p>Superhero App</p>
                <div className='image__box' alt="">
                    <img src={thumbnail.superHeroApp} alt="SuperHeroApp screenshot" />
                </div>
            </div>
            <div className="tiles">
                <p>Weather App</p>
                <div className='image__box'>
                    <img src={thumbnail.weatherApp} alt="WeatherApp screenshot" />
                </div>
            </div>
            <div className="tiles">
                <p>Todo List</p>
                <div className='image__box'>
                    <img src={thumbnail.todoList} alt="TodoList screenshot" />
                </div>
            </div>
            <div className="tiles">
                <p>Tv Maze</p>
                <div className='image__box'>
                    <img src={thumbnail.movieApp} alt="TvMaze screenshot" />
                </div>
            </div>
        </div>
    )
}

export default Portfolio;