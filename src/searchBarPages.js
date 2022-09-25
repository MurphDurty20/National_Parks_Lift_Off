import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';import {  Link } from "react-router-dom";

import './searchBar.css';
 
function SearchBarPages() {
 
  const [parks, setParks] = useState([]);
  const [text, setText] = useState('');
  const [suggestions, setSuggestions] = useState([]);
 
 
  useEffect(() => {
    const loadParks = async() => {
      const response = await axios.get(`http://localhost:8000/parks`)
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
      <div className='searchResults'>
        <Link className="searchLink" to={`${suggestions.parkCode}`}>{suggestions.fullName}</Link>
      </div>
    </div>
  )}
 
</div>
);
}

export default SearchBarPages;
