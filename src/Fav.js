import React from "react";
import "./App.css";
import {useState , useEffect} from 'react'
//import Axios from "axios";
import axios, { Axios } from 'axios'

const listInfo = [];

function Fav() {
    const [parkInfo, getParkInfo] = useState(null);
    const [favList, setFavList] = useState([]); //initializes useState to empty array 

    useEffect(() => {

        const options = {
            method: 'GET',
            url: 'http://localhost:8000/favlist'
        }

        axios.request(options).then((response) => {
            //console.log(response.data)  
            getParkInfo(response.data)

        }).catch((error) => {
            console.error(error)
        })
    }, [])

    const deleteFav = (parkName) => {
        axios.delete(`http://localhost:8000/delete/${parkName}`);

        window.location.reload();
    };
    

    return (<div className="favorite"> 
    <h2><center>Favorites List</center></h2>
            {
            parkInfo?.map((fav, _index) => (
                
                <div key={_index}>
                  
                            <p value = {fav['name']}><a href={fav['url']}>{fav['name']}</a><button onClick={() => {deleteFav(fav['name']) }}>Delete</button></p> 
                </div>))}
      </div>)

}

export default Fav;