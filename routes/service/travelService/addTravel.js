const promisePool = require("../../../config/db")

exports.addTravel = async (userData) => {
    const data = [userData.usrId, userData.date, userData.friends]
    const q = "INSERT INTO TRAVEL (usrId, travlDate, travlFriends) values (?, ?, ?)";
    try{
        const [row, fields] = await promisePool.query(q, data);
        return {"success": true}
    }
    catch{
        return {"success": false}
    }
}
