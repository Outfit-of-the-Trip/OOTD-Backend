const promisePool = require("../../../config/db")

exports.updateUserInfo = async (userData) => {
    const data = [userData.usrStyle1, userData.usrStyle2, userData.usrStyle3, userData.usrId]
    const q = "UPDATE USER SET usrStyle1 = ?, usrStyle2 = ?, usrStyle3 = ? WHERE usrId = ?";
    try{
        const [rows, fields] = await promisePool.query(q, data);
        return {"success": true}
    }
    catch{
        return {"success": false}
    }
}
