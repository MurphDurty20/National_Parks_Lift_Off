import {useEffect, useState} from 'react'
import axios from 'axios'

const Campgrounds = () => {

    const [campgroundInfo, getCampgroundInfo] = useState(null)

    useEffect(() => {

        const options = {
            method: 'GET',
            url: 'http://localhost:8000/campgrounds'
        }

        axios.request(options).then((response) => {
            console.log(response.data)  
            getCampgroundInfo(response.data.data)

        }).catch((error) => {
            console.error(error)
        })
    }, [])


    return (<div className="campgrounds">
            {campgroundInfo?.map((campground, _index) => (

                <div key={_index}>
                    <p>ADDRESS</p>
                    <p>{JSON.stringify(campground['addresses'])}</p>
                    <p>FEES</p>
                   <p>{JSON.stringify(campground['fees'])}</p>
                   {/* <p>{campground['adainfo']}</p>
                   <p>{campground['accessroads']}</p> */}
                </div>))}
        </div>)
    
}
    
export default Campgrounds