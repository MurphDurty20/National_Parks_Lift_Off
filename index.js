const PORT = 8000;
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
require("dotenv").config();
const db = require('./src/components/config/db');
const bodyParser = require('body-parser');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

//creates fav_park table when backend runs if it doesn't already exist.
db.query("CREATE TABLE IF NOT EXISTS fav_park( id MEDIUMINT NOT NULL AUTO_INCREMENT, name VARCHAR(100) NOT NULL,  UNIQUE (name), PRIMARY KEY(id) ) ENGINE = innodb;");

db.query("CREATE TABLE IF NOT EXISTS all_parks( id MEDIUMINT NOT NULL AUTO_INCREMENT, name VARCHAR(100) NOT NULL, codeName VARCHAR(5) NOT NULL, PRIMARY KEY(id) ) ENGINE = innodb;");


app.get("/favlist", (req, res) => {
    db.query("SELECT * FROM fav_park", (err,result) => {
        console.log(result);
        res.send(result);
    })
})

app.post("/", (req,res) => {

    const favParkName = req.body.favParkName;
    const sqlInsert = "INSERT INTO fav_park(name) VALUES (?)";
    db.query(sqlInsert, [favParkName], (err, result) => {
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

app.get('/oneParkInfo', (req,res) => {
    let code = "yell";
    const options = {
        method: 'GET',
        url: `https://developer.nps.gov/api/v1/parks?parkCode=${code}&api_key=${process.env.REACT_APP_PARK_API_KEY}`
}
axios.request(options).then((response) => {
    res.json(response.data)

}).catch((error) => {
    console.error(error)
})
})

app.get('/searchBar', (req,res) => {
  
    const options = {
        method: 'GET',
        url: `https://developer.nps.gov/api/v1/parks?limit=467&api_key=${process.env.REACT_APP_PARK_API_KEY}`
}
axios.request(options).then((response) => {
    res.json(response.data)

}).catch((error) => {
    console.error(error)
})
})

app.listen(PORT, () => console.log(`port is ${PORT}`))