const promisePool = require("../../../config/db")

exports.getUserInfo = async (userID) => {
    const q = "SELECT * FROM USER WHERE usrId = ?";
    const [rows, fields] = await promisePool.query(q, [userID]);
    return rows[0];
}