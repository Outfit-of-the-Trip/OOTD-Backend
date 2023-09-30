const promisePool = require("../../../config/db")
const path = require("path");
const axios = require('axios');
const fs = require('fs');

exports.uploadClosetImage = async (data) => {

    var imgName = data.file.filename;
    var filePath = path.join(__dirname, '../../../uploads', imgName);
    var imageBuffer = fs.readFileSync(filePath);
    var encode = Buffer.from(imageBuffer).toString('base64');

    axios.post("http://35.188.152.122:5543/predict/camera",{
        base64_image: encode
    })
    .then(async res => {
        const param = [data.body.usrId, data.body.clothesId, encode, res.data.label, res.data.color]
        try{
            const q = 'INSERT INTO CLOSET (usrId, clothesId, clothesImg, clothesTag, clothesColor) values (?, ?, ?, ?, ?)';
            await promisePool.query(q, param);
            return {"success": true}
        }catch{
            return {"success": false}
        }
    })


}