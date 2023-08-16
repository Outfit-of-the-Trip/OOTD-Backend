const promisePool = require("../../../config/db")

exports.findFriend = async (body) => {
    const q = "INSERT INTO FRIENDS (toUsrId, fromUsrId, areWeFriend) values (?, ?, ?), (?, ?, ?)"
    const data = [body.requestUserId, body.responseUserId, true, body.responseUserId, body.requestUserId, false]
    try{
        const [rows, fields] = await promisePool.query(q, data);
        return {"success": true}
    }
    catch{
        return {"success": false}
    }
}