const conn = require('../../../config/db')

exports.doRegister = async function(data){
    const param = [data.userEmail, data.userId, data.userPassword];
    var findIDQuery = 'SELECT * FROM USER WHERE userId = ?';
    var signup = null
 
    return new Promise((callback)=>{
        conn.query(findIDQuery, param[2], function(err, row){

            if (err) throw err;
            if(row.length == 0){
                var InsertQuery = 'INSERT INTO USER (userEmail, userId, userPassword) VALUES (?, ?, ?)';

                var sql = conn.query(InsertQuery, param, function(err, rows){
                    if(err) throw err;
                    else signup = true;
                    return callback(signup);
                });
            }
            else {
                signup = false;
                return callback(signup);
            }
            
        });
    });
}