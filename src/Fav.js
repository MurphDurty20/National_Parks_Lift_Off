import React from "react";
import "./App.css";
import {useState , useEffect} from 'react'
//import Axios from "axios";
import axios, { Axios } from 'axios'

const listInfo = [];

function Fav() {
    const [favParkName, setFavParkName] = useState('');
    const [favList, setFavList] = useState([]); //initializes useState to empty array 

    useEffect(() => {
        axios.get('http://localhost:8000/favlist').then((response) => {
            setFavList(response.data);
        })
    }, [])





const submitFav = () => {
    axios.post("http://localhost:8000/", {favParkName: favParkName
}).then(() => {
    alert("Sending to backend success");
});
};


    return (

        <div className="Fav">

            <h1>Select Favorite Park</h1>

            <div className="form">
                <label>Favorite Park(Set as Default)</label>
                <input type ="text" name="favParkName" onChange={(e)=> {
                    setFavParkName(e.target.value)
                }} />
                <button onClick={submitFav}>Submit</button>
            </div>
        </div>
    );

}

export default Fav;