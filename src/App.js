import './App.css';
import MapSection from './components/map/map.jsx'

const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, California.',
  lat: 37.42216,
  lng: -122.08427,
}


const App = () => {
  return (
    <div className="App">
      <h1> National Parks </h1>
      <MapSection location={location} zoomLevel={17} />
      
    </div>
  );
}

export default App;
