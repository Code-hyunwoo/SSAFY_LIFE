const fs = require("fs");

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');


const connection = mysql.createConnection({
    host:conf.host,
    user:conf.user,
    password:conf.password,
    port:conf.port,
    database:conf.database
    // host:"localhost",
    // user:"root",
    // password:"11223344",
    // port:"3306",
    // database:"hyunwoo"
})

// host:conf.host,
// user:conf.user,

connection.connect();

module.exports = connection