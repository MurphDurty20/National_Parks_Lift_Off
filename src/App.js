import { Routes, Route } from 'react-router-dom'
import  Layout  from './components/Layout'
import './App.css';
import SearchResults from './components/SearchResults';
import RegistrationPage from './components/RegistrationPage';
import Sidebar from './SideNav/Sidebar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useEffect } from 'react';
import Search from './search';

const App = () => { 
  
  return ( 

    <div className="App">

      <h1> National Parks </h1>
      <Search />
      <Router>
        <Sidebar />
        <Routes>
          <Route path='/' />
          <Route path="search" element={<SearchResults/>}/>
        </Routes>

      </Router>
    </div>



  )
}


export default App;
