const promisePool = require("../../../config/db")

exports.getUserTable = async () => {
    const q = "SELECT * FROM USER";
    const [rows, fields] = await promisePool.query(q);
    return rows;
}