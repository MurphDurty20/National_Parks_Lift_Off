const PORT = 8000;
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
require("dotenv").config();
const db = require('./src/components/config/db');

app.use(cors());
app.use(express.json());

//creates fav_park table when backend runs if it doesn't already exist.
db.query("CREATE TABLE IF NOT EXISTS fav_park( id MEDIUMINT NOT NULL AUTO_INCREMENT, name VARCHAR(100) NOT NULL, url VARCHAR(100) NOT NULL,  UNIQUE (name), PRIMARY KEY(id) ) ENGINE = innodb;");
//db.query("CREATE TABLE IF NOT EXISTS fav_park( id MEDIUMINT NOT NULL AUTO_INCREMENT, name VARCHAR(100) NOT NULL, userid BIGINT, UNIQUE (name), PRIMARY KEY(id) ) ENGINE = innodb;");

app.get("/favlist", (req, res) => {
    db.query("SELECT * FROM fav_park", (err,result) => {
        console.log(result);
        res.send(result);
    })
})

app.post("/", (req,res) => {

    const favParkName = req.body.favParkName;
    const pagePath = req.body.url;
    const sqlInsert = "INSERT INTO fav_park(name,url) VALUES (?,?)";
    db.query(sqlInsert, [favParkName,pagePath], (err, result) => {
        console.log(err);
    });
})

app.delete("/delete/:parkName", (req,res) => {

    const favParkName = req.params.parkName;
      
    const sqlDelete = "DELETE FROM fav_park WHERE name =?";
    db.query(sqlDelete, [favParkName], (err, result) => {
        console.log(err);
    });
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
/*
app.get('parksplaces', (req,res) => {
    const options = {
        method: 'GET',
        url: `https://developer.nps.gov/api/v1/amenities/parksplaces?limit=500&api_key=${process.env.REACT_APP_PARK_API_KEY}`
}
axios.request(options).then((response) => {
    res.json(response.data)

}).catch((error) => {
    console.error(error)
})
})
*/

app.get('/campgrounds/:parkCode', (req,res) => {
    let parkCode = req.params.parkCode;

    const options = {
        method: 'GET',
        url: `https://developer.nps.gov/api/v1/campgrounds?parkCode=${parkCode}&api_key=${process.env.REACT_APP_PARK_API_KEY}`
    }

    axios.request(options).then((response) => {
        res.json(response.data)

    }).catch((error) => {
        console.error(error)
    })
})

app.get('/OnePark/:parkCode', (req,res) => {
    let parkCode = req.params.parkCode;

    const options = {
        method: 'GET',
        url: `https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&api_key=${process.env.REACT_APP_PARK_API_KEY}`
    }

    axios.request(options).then((response) => {
        res.json(response.data)

    }).catch((error) => {
        console.error(error)
    })
})

app.listen(PORT, () => console.log(`port is ${PORT}`));