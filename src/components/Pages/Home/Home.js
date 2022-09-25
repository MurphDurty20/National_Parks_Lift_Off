import React from 'react';
import './Home.css';
import Map from '../../map/map';
import Alerts from '../../../Alerts';
import Fav from '../../../Fav';
import SearchBar from '../../../searchBar';


  const Home = () => { 
    return (
    <div>
      <SearchBar />
      <Alerts />
      <Fav />
    </div>
)}

export default Home;