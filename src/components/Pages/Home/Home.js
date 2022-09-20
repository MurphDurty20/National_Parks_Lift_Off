import React from 'react';
import './Home.css';
import Map from '../../map/map';
import Parks from '../../../Parks';
import Alerts from '../../../Alerts';
import Fav from '../../../Fav';
import SearchBar from '../../../searchBar';
import campgrounds from '../../../campgrounds';




const location = {
    address: 'Default location, change to search',
    lat: 37.42216,
    lng: -100,
  }

  const Home = () => { 
    return (
    <div>
      <SearchBar />
      <Fav />
        <Map location={location} zoomLevel={17} />
        <Alerts />
        <campgrounds />
    </div>
)}

export default Home;