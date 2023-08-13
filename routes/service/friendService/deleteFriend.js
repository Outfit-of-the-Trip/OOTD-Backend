const promisePool = require("../../../config/db")

exports.deleteFriend = async (body) => {
    const q = "DELETE FROM FRIENDS WHERE (toUsrId = ? AND fromUsrId = ?) AND (fromUsrId = ? AND toUsrId = ?)"
    const data = [body.requestUserID, body.responseUserID, body.responseUserID, body.requestUserID]
    try{
        const [rows, fields] = await promisePool.query(q, data);
        return {"success": true}
    }
    catch{
        return {"success": false}
    }
}