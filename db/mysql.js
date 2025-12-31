// Import MySQL2 module
const mysql = require('mysql2');

// Database connection settings
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'dbuser',
    password: 'RQQ7r3dHzgxPkykYCenv',
    database: 'projeto'
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