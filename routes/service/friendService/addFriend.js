const promisePool = require("../../../config/db")

exports.addFriend = async (body) => {
    const q = "SELECT areWeFriend FROM FRIEND WHERE fromUsrId = ? AND toUsrId = ?"

    const data = [body.reqUser, body.resUser]

    try{
        const [rows] = await promisePool.query(q, data);
        if(!rows.length){
            const q1 = "INSERT INTO FRIEND (toUsrId, fromUsrId, areWeFriend) values (?, ?, ?), (?, ?, ?)"
            const data1 = [body.reqUser, body.resUser, false, body.resUser, body.reqUser, true]
            await promisePool.query(q1, data1);
            return {"msg": "Friend Request SUCCESS"}
        }
        else{
            const updateQuery = "UPDATE FRIEND SET areWeFriend=1 WHERE fromUsrId = ? AND toUsrId = ?"
            const data2 = [body.reqUser, body.resUser]
            await promisePool.query(updateQuery, data2);
            return {"msg": "Friend Accept SUCCESS"}
        }
    }
    catch{
        return {"success": false}
    }
}