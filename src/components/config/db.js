const mysql = require('mysql')
const db = mysql.createConnection({
host: "localhost",
user: "parks",
password: "greatpassword",
database:"parks" 
})

module.exports = db;