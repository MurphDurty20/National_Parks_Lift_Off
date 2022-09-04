import {useEffect, useState} from 'react'
import axios, { Axios } from 'axios'

const Parks = () => {

    const [parkInfo, getParkInfo] = useState(null)

    const [parkInfo2, getParkInfo2] = useState(null)

    const [allParks, setAllParks] = useState(null)

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

    return (<div className="parks"> 
            {
            parkInfo?.map((park, _index) => (
                <div key={_index}>
                            <p value = {park['fullName']}>{park['fullName']}</p>
                            <p value = {park['parkCode']}>{park['parkCode']}</p>
                </div>))}
      </div>)

}

export default Parks