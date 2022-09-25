import {useEffect, useState} from 'react'
import axios from 'axios'
import './events.css'

const Events = () => {

    const [eventInfo, getEventInfo] = useState(null)

    useEffect(() => {

        const options = {
            method: 'GET',
            url: 'http://localhost:8000/events'
        }

        axios.request(options).then((response) => {
            console.log(response.data)  
            getEventInfo(response.data.data)

        }).catch((error) => {
            console.error(error)
        })
    }, [])


    return (<div className="events">
            <h2 className='eventsTitle'><center>Upcoming Events</center></h2>
            {eventInfo?.map((event, _index) => (

                <div key={_index}>
                   <h3 ><center>{event['parkfullname']}</center></h3>
                   <p >{event['title']}</p>
                   <p>{event['datestart']} - {event['dateend']}</p>
                </div>))}
        </div>)
    
}
    
export default Events