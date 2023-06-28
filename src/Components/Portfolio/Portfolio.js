import './Portfolio.css';

function Portfolio() {
    return(
        <div className="tiles__wrap">
            <div className="tiles">
                <p>Superhero Api</p>
                <div className='image__box' alt="">
                    <img src='' />
                </div>
            </div>
            <div className="tiles">
                <p>Weather App</p>
                <div className='image__box'></div>
            </div>
            <div className="tiles">
                <p>Todo List</p>
                <div className='image__box'></div>
                </div>
            <div className="tiles">
                <p>Tv Maze</p>
                <div className='image__box'></div>
                </div>
        </div>
    )
}

export default Portfolio;