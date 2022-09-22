import {useEffect, useState} from 'react'
import axios from 'axios'

const Alerts = () => {

    const [alertInfo, getAlertInfo] = useState(null)
    const [parkInfo, getParkInfo] = useState(null)
    useEffect(() => {

        const options = {
            method: 'GET',
            url: 'http://localhost:8000/alerts'
        }

        axios.request(options).then((response) => {
            console.log(response.data)  
            getAlertInfo(response.data.data)

        }).catch((error) => {
            console.error(error)
        })
    }, [])

    useEffect(() => {

        const options = {
            method: 'GET',
            url: 'http://localhost:8000/allparks'
        }

        axios.request(options).then((response) => {
            //console.log(response.data)  
            getParkInfo(response.data)

        }).catch((error) => {
            console.error(error)
        })
    }, [])

    return (<div className="alerts">
            <h2><center>Parks</center></h2>
            {parkInfo?.map((park, _index) => (
    <div key={_index}>
   <p>{park['name']}</p>
</div>))}
            {alertInfo?.map((alert, _index) => (

                <div key={_index}>
                   <p>{alert['parkCode']}</p>
                   <p>{alert['description']}</p>
                   <p>{alert['lastIndexedDate']}</p>
                </div>))}
        </div>)
    
}
    
export default Alerts