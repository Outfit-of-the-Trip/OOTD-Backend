const promisePool = require("../../../config/db")

exports.deleteFriend = async (body) => {
    const q1 = "DELETE FROM FRIENDS WHERE toUsrId = ? AND fromUsrId = ?"
    const q2 = "DELETE FROM FRIENDS WHERE fromUsrId = ? AND toUsrId = ?"
    const data = [body.reqUser, body.resUser]
    try{
        await promisePool.query(q1, data);
        await promisePool.query(q2, data);
        return {"success": true}
    }
    catch{
        return {"success": false}
    }
}