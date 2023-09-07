import './App.css';
import Nav from './Components/Nav/Nav';
import HomePage from './Components/HomePage/HomePage.js'
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact.js';
import DetailedPortfolio from './Components/DetailedPortfolio/DetailedPortfolio';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Nav />
      <main>
        <div className='container'>
          <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route path='/about' element={<About />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/portfolio/:name' element={<DetailedPortfolio />} />
          </Routes>
        </div>
      </main>
    </Router>
    
  );
}

export default App;
