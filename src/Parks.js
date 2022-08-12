import {useEffect, useState} from 'react'
import axios from 'axios'

const Parks = () => {

    const [parkInfo, getParkInfo] = useState(null)

    useEffect(() => {

        const options = {
            method: 'GET',
            url: 'http://localhost:8000/parks'
        }

        axios.request(options).then((response) => {
            //console.log(response.data)  
            getParkInfo(response.data.data)

        }).catch((error) => {
            console.error(error)
        })
    }, [])

    //console.log(parkInfo)

    return (<div className="parks">
            <h2><center>(and fees)</center></h2>
            {parkInfo?.map((park, _index) => (

                <div key={_index}>
                   <a href={park['url']}><p>{park['fullName']}</p></a>
                   <p>{JSON.stringify(park['entranceFees'])}</p>
                </div>))}
        </div>)
}
    
export default Parks