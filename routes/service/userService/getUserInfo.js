const promisePool = require("../../../config/db")

exports.getUserInfo = async (userId) => {
    const q = "SELECT * FROM USER WHERE usrId = ?";
    const [rows, fields] = await promisePool.query(q, [userId]);
    return rows[0];
};