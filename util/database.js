const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'stores_complete',
    password: 'Peacemaker7#'
});

module.exports = pool.promise();