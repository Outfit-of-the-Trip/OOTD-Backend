const promisePool = require("../../../config/db")

exports.getClosetData = async (data) => {
    param = [data.usrId, data.clothesId]
    const q = "SELECT * FROM CLOSET WHERE usrId = ? AND clothesId = ?";
    const [rows, fields] = await promisePool.query(q, param);
    return rows;
}