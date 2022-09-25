import {useEffect, useState} from 'react'
import axios from 'axios'
import './alerts.css'

const Alerts = () => {

    const [alertInfo, getAlertInfo] = useState(null)

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


    return (<div className="alerts">
            <h2 className='alertsTitle'><center>Alerts</center></h2>
            {alertInfo?.map((alert, _index) => (

                <div key={_index}>
                   <h3 ><center>{alert['parkCode']}</center></h3>
                   <p ><center>{alert['title']}</center></p>
                   <p>{alert['description']}</p>
                   <p>{alert['lastIndexedDate']}</p>
                </div>))}
        </div>)
    
}
    
export default Alerts