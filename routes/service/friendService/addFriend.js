const promisePool = require("../../../config/db")

exports.addFriend = async (body) => {
    const q = "SELECT * FROM FRIENDS WHERE toUsrId = ? AND fromUsrId = ?"

    const data = [body.responseUserId, body.requestUserId]

    try{
        const [rows1] = await promisePool.query(q, data);
        
        if(!rows1.length){
            const q1 = "INSERT INTO FRIENDS (toUsrId, fromUsrId, areWeFriend) values (?, ?, ?), (?, ?, ?)"
            const data1 = [body.requestUserId, body.responseUserId, false, body.responseUserId, body.requestUserId, true]
            const [rows] = await promisePool.query(q1, data1);
            return {"msg": "Friend Request SUCCESS"}
        }
        else{
            const updateQuery = "UPDATE FRIENDS SET areWeFriend=1 WHERE fromUsrId = ? AND toUsrId = ?"
            const data2 = [body.responseUserId, body.requestUserId]
            const [rows] = await promisePool.query(q, data2);
            return {"msg": "Friend Accept SUCCESS"}
        }
    }
    catch{
        return {"success": false}
    }
}