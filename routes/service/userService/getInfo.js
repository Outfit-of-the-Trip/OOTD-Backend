const promisePool = require("../../../config/db")

exports.getInfo = async (userID) => {
    console.log(userID)
    const q = "SELECT * FROM USER WHERE usrId = ?";
    const [rows, fields] = await promisePool.query(q, [userID]);
    
    return rows[0];
}