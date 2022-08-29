import './App.css';
import SearchResults from './components/SearchResults';
import RegistrationPage from './components/RegistrationPage';
import Sidebar from './SideNav/Sidebar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useEffect } from 'react';
import Search from './search';
import MapSection from './components/map/map.jsx'
import Parks from './Parks.js';
import Alerts from './Alerts.js';

const location = {
  address: 'Default location, change to search',
  lat: 37.42216,
  lng: -100,
}

const App = () => { 
  return (
    <div className="App">

      <Sidebar />
      <h1> National Parks </h1>
      <MapSection location={location} zoomLevel={17} />
      <Search />
      <Parks />
      <Alerts />
      {/* <Router>
        <Sidebar />
        <Routes>
          <Route path='/' />
          <Route path="search" element={<SearchResults/>}/>
        </Routes>
      </Router> */}
    </div>
  )
}


export default App;