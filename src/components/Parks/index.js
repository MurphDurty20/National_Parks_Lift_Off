import { useState, useEffect } from "react";
import "./index.css"

const  Parks = () => {
    const NP_API_KEY = process.env.REACT_APP_PARK_API_KEY;
    const url = `https://developer.nps.gov/api/v1/parks?stateCode=mo
    &api_key=${NP_API_KEY}`;

    const [parkData, setParkData] = useState([])
    const [readMore, setReadMore] = useState(false);
     
    useEffect(() => {
        fetch(url)
            .then((result) => {return result.json()})
            .then((data) => {
                setParkData(data.data)
            })
    },[])

    console.log(parkData)
    
    return ( 
    <main>
        {parkData.map((park) => (
            <article key={park.id} className="single-park">
            <img src={park.images[0].url} alt={`${park.fullName}`} />
            <footer>
                <div className="tour-info">
                    <h4>{park.fullName}</h4>
                    {/* <h4 className="tour-price">${park.entranceFee[2].cost}</h4> */}
                </div>
                <p>{readMore? park.description:`${park.description.substring(0,200)}...`
                    }
                    <button onClick={() => {setReadMore(!readMore)}}>{readMore?"show less":"read more"}</button>
                </p>
                <a href={park.url}>
                    <button className="delete-btn">Visit Parksite</button>
                </a>
            </footer>
        </article>
        ))}
    </main>
     );
}
 
export default Parks;