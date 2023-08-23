const promisePool = require("../../../config/db")

exports.getPhotozone = async () => {
    const q = "SELECT * FROM PHOTOZONE";
    const [rows, fields] = await promisePool.query(q);
    return rows;
}