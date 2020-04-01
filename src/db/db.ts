import mysql from 'mysql';
import config from '../config'
// const mysql = require("mysql");
// const dbConfig = require("../config");

// Create a connection to the database
const connection = mysql.createPool({
    host: config.db.host,
    user: config.db.userName,
    password: config.db.password,
    database: config.db.name
  });
  
  // open the MySQL connection
  connection.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
  });
  
  module.exports = connection;