const mysql = require('mysql2');


const connection = mysql.createConnection({  
    host: '130.162.131.204',
    port: 3306,
    user: 'oott',
    password: 'oott',
    database: 'oott',
    multipleStatements: true
});

connection.connect( function(err){ 
    if( err ) console.log(err);
    else console.log('connected');
});

module.exports = connection;