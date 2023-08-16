const promisePool = require("../../../config/db")

exports.getFriendsTable = async () => {
    const q = "SELECT * FROM FRIENDS";
    const [rows, fields] = await promisePool.query(q);
    return rows;
}