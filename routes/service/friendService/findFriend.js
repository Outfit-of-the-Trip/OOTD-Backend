const promisePool = require("../../../config/db")

exports.findFriend = async (usrId) => {
    var usrId = "%"+usrId+"%"
    const q = "SELECT * FROM USER WHERE usrId LIKE ?"
    const [Friend, fields] = await promisePool.query(q, [usrId]);
    return Friend;
}