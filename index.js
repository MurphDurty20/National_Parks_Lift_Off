const PORT = 8000;
const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();
const db = require('./src/components/config/db');


const app = express();

app.use(cors())

db.query("CREATE TABLE IF NOT EXISTS fav_park( cid MEDIUMINT NOT NULL AUTO_INCREMENT, name VARCHAR(50) NOT NULL, location VARCHAR(50) NOT NULL, PRIMARY KEY(cid) ) ENGINE = innodb;");



app.get('/', (request,response) => {
    response.json("hi")
})

app.get('/parks', (req,res) => {
    const options = {
        method: 'GET',
        url: `https://developer.nps.gov/api/v1/parks?limit=500&api_key=${process.env.REACT_APP_PARK_API_KEY}`
}
axios.request(options).then((response) => {
    res.json(response.data)

}).catch((error) => {
    console.error(error)
})
})

app.get('/alerts', (req,res) => {
    const options = {
        method: 'GET',
        url: `https://developer.nps.gov/api/v1/alerts?limit=5&api_key=${process.env.REACT_APP_PARK_API_KEY}`
}
axios.request(options).then((response) => {
    res.json(response.data)

}).catch((error) => {
    console.error(error)
})
})



app.listen(PORT, () => console.log(`port is ${PORT}`))