import './App.css';
import parkData from './Data.json'
import Sidebar from './SideNav/Sidebar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useEffect } from 'react';
import SearchBar from './search';
const API_URL = process.env.REACT_APP_PARK_API_KEY;
const url = `https://developer.nps.gov/api/v1/parks?name&api_key=${API_URL}`;



const App = () => { 
  return ( <>
    <div className="App">

      <h1> National Parks </h1>
      <Router>
        <Sidebar />
        <Routes>
          <Route path='/' />
        </Routes>
        <SearchBar />
      </Router>
    </div>
  </>
  );
}


export default App;
