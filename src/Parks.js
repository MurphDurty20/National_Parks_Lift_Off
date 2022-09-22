import React, {useEffect, useState} from 'react'
import axios, { Axios } from 'axios'



 const Parks = () => {

    
    const [parkInfo, getParkInfo] = useState(null)
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

        
    const insertAll = (parkName,code) => {

   
         axios.post("http://localhost:8000/allparks", {parkName: parkName, code: code
    }).then(() => {
        alert("Sending to backend success");

    });
    };

    
 


  
    return (<div className="parks"> 
    <body></body>
            {
            parkInfo?.map((park, _index) => (
                <div key={_index}>
                        <p onload={insertAll(park['fullName'],park['parkCode'])}></p>
                            <p value = {park['fullName']}>{park['fullName']}</p>
                            <p value = {park['parkCode']}>{park['parkCode']}</p>
                </div>))}
      </div>)



}

export default Parks