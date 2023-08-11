const promisePool = require("../../../config/db")

exports.deleteTravel = async (userData) => {
    const data = [userData.usrId, userData.date]
    const q = "DELETE FROM TRAVEL WHERE usrId = ? and travlDate = ?";
    try{
        const [rows, fields] = await promisePool.query(q, data);
        return {"success": true}
    }
    catch{
        return {"success": false}
    }
}
