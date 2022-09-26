import {useEffect, useState} from 'react'
import axios from 'axios'
import './campground.css'

const Campgrounds = ({ parkId }) => {

    const [campgroundInfo, getCampgroundInfo] = useState(null)

    useEffect(() => {

        const options = {
            method: 'GET',
            url: `http://localhost:8000/campgrounds/${parkId}`
        }

        axios.request(options).then((response) => {
            getCampgroundInfo(response.data.data)
        }).catch((error) => {
            console.error(error)
        })
    }, [parkId])

    

    return (<div className="campgrounds">
            {campgroundInfo?.map((campground, _index) => (
                
                <div key={_index}>
                    {campground.images.length > 0 && (
                        <img className= 'images' src= {campground.images[0].url}></img>
                    )}
                   <p className = 'fees'>{campground.name}: {campground.fees[0].description}</p>
                   <p className = 'hours'>{campground.name}: {campground.operatingHours[0].description}</p>

                </div>))}
        </div>)
    
}
    
export default Campgrounds