const Park = () => {
    return ( 
        <article className="single-park">
            <img src={image} alt={`${name}`} />
            <footer>
                <div className="tour-info">
                    <h4>{name}</h4>
                    <h4 className="tour-price">${price}</h4>
                </div>
                <p>{readMore? info:`${info.substring(0,200)}...`
                    }
                    <button onClick={() => {setReadMore(!readMore)}}>{readMore?"show less":"read more"}</button>
                </p>
            </footer>
        </article>
     );
}
 
export default Park;
