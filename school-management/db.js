
const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  password: 'Beena1123$', 
  database: 'School'
});

// Database Connection
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL!');

  // SQL query to create the 'schools' table
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS schools (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      address VARCHAR(255),
      latitude FLOAT,
      longitude FLOAT
    );
  `;

 
  connection.query(createTableQuery, (err, results) => {
    if (err) {
      console.error('Error creating table:', err);
      return;
    }
    console.log('Table created or already exists:', results);

    // SQL query to select all data from the 'schools' table
    const selectQuery = 'SELECT * FROM schools;';

    // Execute the query to retrieve data
    connection.query(selectQuery, (err, results) => {
      if (err) {
        console.error('Error retrieving data:', err);
        return;
      }
      console.log('Table Data:', results);

     
    });
  });
});
module.exports = connection;