import {useEffect, useState} from 'react'
import axios from 'axios'
import './OnePark.css'

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


    return (<div className="OnePark">
        
            {OneParkInfo?.map((OnePark, _index) => (

                <div key={_index}>
                    <h1 className = 'ParkName'>{OnePark.fullName}</h1>
                    <img className= 'HeaderImage' src= {OnePark.images[0].url}></img>

                   {/* <p className = 'hours'>{campground.name}: {campground.operatingHours[0].description}</p> */}

                </div>))}
        </div>)
    
}
    
export default OnePark