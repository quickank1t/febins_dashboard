"use strict";

const express = require('express')
var mysql = require('mysql');
var edge = require('edge');

const app = express();
const port = 3000
var params = {
    connectionString: "Server=YourServer;Database=YourDB;Integrated Security=True",
    source: "SELECT TOP 20 * FROM SampleData"
  };
var getData = edge.func( 'sql', params);


var con = mysql.createConnection({
    host: "localhost",
    user: "yourusername",
    password: "yourpassword",
    database: "mydb"
  });
  
app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    getData(null, function (error, result) {
        if (error) { console.log(error); return; }
        if (result) {
         console.log(result);
        }
        else {
         console.log("No results");
        }
      });
  })

