import React from 'react';
import './Home.css';
import Alerts from '../../../Alerts';
import Fav from '../../../Fav';
import SearchBar from '../../../searchBar';
import Pictures from '../../../pictures';
import Sidebar from '../../../SideNav/Sidebar';
import Events from '../../../events';

  const Home = () => { 
    return (
    <div>
      <Sidebar />
      <h1><center> National Parks </center></h1>
      <SearchBar />
      <Fav />
      <Pictures />
        <Alerts />
        <Events />
    </div>
)}

export default Home;