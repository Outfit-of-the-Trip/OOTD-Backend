const promisePool = require("../../../config/db")

exports.getClosetTable = async () => {
    const q = "SELECT * FROM CLOSET";
    const [rows, fields] = await promisePool.query(q);
    return rows;
}