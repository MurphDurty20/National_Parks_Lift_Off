import { useState, useEffect } from "react";

const SearchResults = () => {
    const NP_API_KEY = process.env.REACT_APP_NATIONAL_PARK_API_KEY;
    const url = `https://developer.nps.gov/api/v1/parks?stateCode=me&api_key=${NP_API_KEY}`;

    const [parkData, setParkData] = useState([])
  
     
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
            <article key={park.id}>
                <header>
                    <h1>{park.fullName}</h1>
                    <p>{park.description}</p>
                </header>
            </article>
        ))}
    </main>
     );
}
 
export default SearchResults;