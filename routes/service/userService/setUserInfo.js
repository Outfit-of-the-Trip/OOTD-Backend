const promisePool = require("../../../config/db")

exports.setUserInfo = async (userData) => {
    const data = [userData.usrId, userData.usrGender, userData.usrAge, userData.usrProfileURL, userData.usrCreateAt]
    const q = "INSERT INTO USER (usrId, usrGender, usrAge, usrProfileURL, usrCreateAt) values (?, ?, ?, ?, ?)";
    try{
        const [rows, fields] = await promisePool.query(q, data);
        return {"success": true}
    }
    catch{
        return {"success": false}
    }
}
