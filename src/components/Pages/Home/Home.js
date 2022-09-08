import React from 'react';
import './Home.css';
import Map from '../../map/map';
import Parks from '../../../Parks';
import Alerts from '../../../Alerts';
import campgrounds from '../../../campgrounds';




const location = {
    address: 'Default location, change to search',
    lat: 37.42216,
    lng: -100,
  }

  const Home = () => { 
    return (
    <div>
        <Map location={location} zoomLevel={17} />
        <Alerts />
        <Parks />
        <campgrounds />
    </div>
)}

export default Home;