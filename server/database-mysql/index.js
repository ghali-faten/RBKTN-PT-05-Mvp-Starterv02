const mysql = require('mysql2');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'fatenghali',
  database : 'stock'
});
connection.connect((err)=>{
  err ? console.log(err) :
  console.log("Connected to MySQL");
})

module.exports = connection;