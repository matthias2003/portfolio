import './App.css';
import Nav from './Components/Nav/Nav';
import HomePage from './Components/HomePage/HomePage.js'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Nav />
      <main>
        <div className='container'>
          <Routes>
            <Route exact path='/' element={<HomePage />} />
          </Routes>
        </div>
      </main>
    </Router>
    
  );
}

export default App;
