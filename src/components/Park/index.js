import { useState } from "react";

const Park = (fullName,images,description,entranceFee) => {
    const [readMore, setReadMore] = useState(false);
    return ( 
        <article key={park.id} className="single-park">
            <img src={images[0].url} alt={`${fullName}`} />
            <footer>
                <div className="tour-info">
                    <h4>{fullName}</h4>
                    <h4 className="tour-price">${entranceFee[2].cost}</h4>
                </div>
                <p>{readMore? description:`${description.substring(0,200)}...`
                    }
                    <button onClick={() => {setReadMore(!readMore)}}>{readMore?"show less":"read more"}</button>
                </p>
            </footer>
        </article>
     );
}
 
export default Park;
