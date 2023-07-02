const conn = require('../../../config/db')
const config = require('../../../config/config')
const jwt = require('jsonwebtoken');

exports.doLogin = async function(data){

    const key = config.SECRET_KEY;
    const loginID = data.userId
    const loginPW = data.userPassword
    param = [data.userId, data.userPassword]
    
    var sql = 'SELECT * FROM USER WHERE userId = ?';
    var res = null

    return new Promise((callback)=>{
        conn.query(sql, loginID, (err, row) => {
            if(row.length == 0){
                if(err) throw err;
                res = 0;
            }
            else{
                var userpw = row[0].userPassword;
                if(userpw === loginPW){
                    var token = jwt.sign({userId: loginID}, key);
                    res = token;
                }
                else{
                    res = 0;
                }
            }
            return callback(res);
        })
    });
}