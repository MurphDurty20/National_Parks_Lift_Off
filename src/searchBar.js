import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './searchBar.css';
 
const API_KEY=process.env.REACT_APP_PARK_API_KEY
 
function SearchBar() {
 
  const [parks, setParks] = useState([]);
  const [text, setText] = useState('');
  const [suggestions, setSuggestions] = useState([]);
 
 
  useEffect(() => {
    const loadParks = async() => {
      const response = await axios.get(`https://developer.nps.gov/api/v1/parks?limit=467&api_key=${API_KEY}`)
      setParks(response.data.data)
 
      console.log(response.data)
    }
    loadParks()
 
 
  }, [])
 
  const onSuggestHandler = (text) => {
 
    setText(text);
    setSuggestions([]);
  }
 
  const onChangeHandler = (text) => {
    let matches = []
    if (text.length > 0 ) {
      matches = parks.filter(parks => {
        const regex = new RegExp(`${text}`, "gi")
        return parks.fullName.match(regex)
    })
 
}
console.log('matches', matches)
setSuggestions(matches)
setText(text)
}

return (
<div className="container">
  <input type="text"  className='textInput'
  placeholder='Enter Park'

  onChange={e => onChangeHandler(e.target.value)}
  value={text}
  /*onBlur= {() => {
    setTimeout(() => {
      setSuggestions([])
    }, 50);
  }}*/

  />
  {suggestions && suggestions.map((suggestions, i) =>
    <div key={i} className="suggestion">  
      <div className='searchResults'><a className="searchLink" href={suggestions.url}>{suggestions.fullName}</a></div>
     
   
    </div>
  )}
 
</div>
);
}

export default SearchBar;
