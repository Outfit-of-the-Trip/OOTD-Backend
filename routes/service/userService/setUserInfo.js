const promisePool = require("../../../config/db")

exports.setUserInfo = async (userData) => {
    const data = [userData.usrId, userData.usrGender, userData.usrAge, userData.usrProfileURL, userData.usrStyle1, userData.usrStyle2, userData.usrStyle3]
    const q = "insert into USER (usrId, usrGender, usrAge, usrProfileURL, usrStyle1, usrStyle2, usrStyle3, usrRole) values(?, ?, ?, ?, ?, ?, ?, 0);";
    try{
        const [rows, fields] = await promisePool.query(q, data);
        return {"success": true}
    }
    catch{
        return {"success": false}
    }
}
