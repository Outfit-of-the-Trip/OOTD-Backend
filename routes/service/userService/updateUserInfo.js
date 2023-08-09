const promisePool = require("../../../config/db")

exports.updateUserInfo = async (userData) => {
    const data = [ userData.usrAge, userData.usrProfileURL, userData.usrUpdateAt, userData.usrId]
    const q = "UPDATE USER SET usrAge = ?, usrProfileURL = ?, usrUpdateAT = ? WHERE usrId = ?"
    try{
        const [rows, fields] = await promisePool.query(q, data);
        return {"success": true}
    }
    catch{
        return {"success": false}
    }
}
