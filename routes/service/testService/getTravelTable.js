const promisePool = require("../../../config/db")

exports.getTravelTable = async () => {
    const q = "SELECT * FROM TRAVEL";
    const [rows, fields] = await promisePool.query(q);
    return rows;
}