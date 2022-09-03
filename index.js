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
db.query("CREATE TABLE IF NOT EXISTS fav_park( id MEDIUMINT NOT NULL AUTO_INCREMENT, name VARCHAR(100) NOT NULL, address VARCHAR(150) NOT NULL,latitude DECIMAL(13,10) NOT NULL, longitude DECIMAL(13,10) NOT NULL, PRIMARY KEY(id) ) ENGINE = innodb;");

//db.query("INSERT INTO fav_park(name,address,latitude,longitude) VALUES ('Abraham Lincoln Birthplace National Historical Park','2995 lincoln farm road hodgenville ky 42748', 37.5858662,-85.67330523)");

//app.get('/', (request,response) => {
  //  response.json("hi")
//})

app.post("/", (req,res) => {

    const favParkName = req.body.favParkName;
    const sqlInsert = "INSERT INTO fav_park(name,address,latitude,longitude) VALUES (?, '2995 lincoln farm road hodgenville ky 42748', 37.5858662,-85.67330523)";
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

app.listen(PORT, () => console.log(`port is ${PORT}`))