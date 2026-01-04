// Import MySQL2 module
const mysql = require('mysql2');
require('dotenv').config();

// Database connection settings
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Test database connection
connection.connect(function(error) {
    if (error) {
        console.log(error);
    } else {
        console.log('Database connected successfully!');
    }
});

// Export connection
module.exports = connection;