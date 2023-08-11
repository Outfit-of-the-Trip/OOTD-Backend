const promisePool = require("../../../config/db")

exports.findFriend = async (userID) => {
    const q = "SELECT * FROM USER WHERE usrId = ?"
    const [Friend, fields] = await promisePool.query(q, [userID]);
    return Friend;
}