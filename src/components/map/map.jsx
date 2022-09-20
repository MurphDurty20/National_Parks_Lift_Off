import React from 'react'
import GoogleMapReact from 'google-map-react'
import './map.css'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

const Map = ({ location, zoomLevel }) => (
    <div className="map">
      <h2 className="map-h2">Here is the location!</h2>
  
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_googleApiKey }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  )

  const LocationPin = ({ text }) => (
    <div className="pin">
      <Icon icon={locationIcon} className="pin-icon" />
      <p className="pin-text">{text}</p>
    </div>
  )

  export default Map

// need at top of file to import the map function
  // import MapSection from './components/map/map.jsx'

// need to have this location const in order to pass into map element
  // const location = {
  //   address: '1600 Amphitheatre Parkway, Mountain View, California.',
  //   lat: 37.42216,
  //   lng: -122.08427,
  // }

  //will need to be in the html to show map
  // <MapSection location={location} zoomLevel={17} />