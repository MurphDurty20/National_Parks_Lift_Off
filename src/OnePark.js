import {Component, useEffect, useState} from 'react'
import axios from 'axios'
import './OnePark.css'
import Map from './components/map/map'

// const location = {
//     address: ,
//     lat: params.latitude,
//     lng: -122.08427,
//   }

const OnePark = ({ parkId }) => {

    const [OneParkInfo, getOneParkInfo] = useState(null)

    useEffect(() => {

        const options = {
            method: 'GET',
            url: `http://localhost:8000/OnePark/${parkId}`
        }

        axios.request(options).then((response) => {
            getOneParkInfo(response.data.data)
        }).catch((error) => {
            console.error(error)
        })
    }, [])

    
    const submitFav = (parkName) => {

        axios.post("http://localhost:8000/", {favParkName: parkName, url: `http://localhost:3000/resultTemplate/${parkId}`
    }).then(() => {
        alert("Sending to backend success");
    });
    };


    return (<div className="OnePark">
        
            {OneParkInfo?.map((OnePark, _index) => (

                <div key={_index}>
                    <h1 className = 'ParkName'>{OnePark.fullName}</h1>

                    <button onClick={submitFav(OnePark.fullName)}>Add to Favorites</button>
                    <img className= 'HeaderImage' src= {OnePark.images[0].url}></img>
                    <Map location={{address: OnePark.fullName,lat: parseFloat(OnePark.latitude),lng: parseFloat(OnePark.longitude)}} zoomLevel={10} />
                   {/* <p className = 'hours'>{campground.name}: {campground.operatingHours[0].description}</p> */}
                </div>))}
        </div>)
    
}
    
export default OnePark