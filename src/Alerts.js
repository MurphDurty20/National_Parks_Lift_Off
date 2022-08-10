import {useEffect, useState} from 'react'
import axios from 'axios'

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
            <h2><center>Alerts</center></h2>
            {alertInfo?.map((alert, _index) => (

                <div key={_index}>
                   <p>{alert['parkCode']}</p>
                   <p>{alert['description']}</p>
                   <p>{alert['lastIndexedDate']}</p>
                </div>))}
        </div>)
    
}
    
export default Alerts