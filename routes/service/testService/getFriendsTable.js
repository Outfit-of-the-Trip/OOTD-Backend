const promisePool = require("../../../config/db")

exports.getFriendsTable = async () => {
    const q = "SELECT * FROM FRIEND";
    const [rows, fields] = await promisePool.query(q);
    return rows;
}