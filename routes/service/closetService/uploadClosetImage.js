const promisePool = require("../../../config/db")
const path = require("path")
const fs = require('fs');

exports.uploadClosetImage = async (data) => {

    var imgName = data.file.filename;
    var filePath = path.join(__dirname, '../../../uploads', imgName);
    var imageBuffer = fs.readFileSync(filePath);
    var encode = Buffer.from(imageBuffer).toString('base64');

    return encode
}