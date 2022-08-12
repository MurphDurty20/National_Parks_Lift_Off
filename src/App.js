import './App.css';

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
        </Routes>

      </Router>
    </div>



  )
}


export default App;
