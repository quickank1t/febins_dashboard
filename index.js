"use strict";

const express = require('express')
var mysql = require('mysql');
require("msnodesqlv8");

const app = express();
const port = 3000
  

var con = new mysql.createConnection({
    database: "mydb",
    server: "localhost",
    driver: "msnodesqlv8",
    options: {
        trustedConnection: true
      }
  });
  
app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT * FROM customers", function (err, result, fields) {
          if (err) throw err;
          console.log(result);
        });
      });
  })

  // https://stackoverflow.com/questions/33709807/how-to-connect-to-sql-server-with-windows-authentication-from-node-js-using-mssq