const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");


console.log("haii")
// Create a connection to the database
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

// open the MySQL connection
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});


// TEST FUNCTION
fun = async () => {
  const result = await connection.query('SELECT * FROM user', (err, res) => {
    if (res.length) {
      console.log(res[0]);
      return;
    }
});}


// CALLING TEST FUNCTION
fun()
// RowDataPacket { id: 1, name: 'jayakrishnan' }


module.exports = connection;