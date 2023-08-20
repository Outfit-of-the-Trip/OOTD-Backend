const promisePool = require("../../../config/db")

exports.deleteFriend = async (body) => {
    const q1 = "DELETE FROM FRIENDS WHERE toUsrId = ? AND fromUsrId = ?"
    const q2 = "DELETE FROM FRIENDS WHERE fromUsrId = ? AND toUsrId = ?"
    const data1 = [body.requestUserID, body.responseUserID]
    const data2= [body.requestUserID, body.responseUserID]
    try{
        const [rows, fields] = await promisePool.query(q1, data1);
        const [rows1, fields1] = await promisePool.query(q2, data2);
        return {"success": true}
    }
    catch{
        return {"success": false}
    }
}