const promisePool = require("../../../config/db")

exports.getMyTravelInfo = async (userId) => {
    const q = "SELECT * FROM TRAVEL WHERE usrId = ?";
    const [rows, fields] = await promisePool.query(q, [userId]);
    return rows;
}