// Import DB connection
const connection = require('../db/mysql');


function index(req, res) {
    //res.render('index');
    res.status(200).json({ message: 'API is working fine' });
};

function cadUser(req, res) {

    let name = req.body.name;
    let email = req.body.email;
    let age = req.body.age;

    let sql = `INSERT INTO users (name, email, age) VALUES ('${name}', '${email}', ${age})`;

    connection.query(sql, function (error, result) {
        if (error) {
            res.status(500).json({ message: 'Error inserting user', error: error });
        } else {
            res.status(201).json({ message: 'User created successfully', userId: result.insertId });
        }
    });

};

function listUsers(req, res) {
    let sql = 'SELECT * FROM users';

    connection.query(sql, function (error, results) {
        if (error) {
            res.status(500).json({ message: 'Error fetching users', error: error });
        } else {
            res.status(200).json(results);
        }
    });
};

function getUserById(req, res) {
    let userId = req.params.codigo;
    let sql = `SELECT * FROM users WHERE codigo = ${userId}`;
    connection.query(sql, function (error, results) {
        if (error) {
            res.status(500).json({ message: 'Error fetching user', error: error });
        } else {
            res.status(200).json(results[0]);
        }
    });
};

function updateUser(req, res) {
    let userId = req.params.codigo;
    let name = req.body.name;
    let email = req.body.email;
    let age = req.body.age;

    let sql = `UPDATE users SET name='${name}', email='${email}', age=${age} WHERE codigo=${userId}`;

    connection.query(sql, function (error, result) {
        if (error) {
            res.status(500).json({ message: 'Error updating user', error: error });
        } else {
            res.status(200).json({ message: 'User updated successfully' });
        }
    });
};

function deleteUser(req, res) {
    let userId = req.params.codigo;
    
    let sql = `DELETE FROM users WHERE codigo = ${userId}`;
    
    connection.query(sql, function (error, result) {
        if (error) {
            res.status(500).json({ message: 'Error deleting user', error: error });
        } else {
            res.status(200).json({ message: 'User deleted successfully' });
        }
    });
};


// Export connection
module.exports = {
    index,
    connection,
    cadUser,
    listUsers,
    getUserById,
    updateUser,
    deleteUser
};