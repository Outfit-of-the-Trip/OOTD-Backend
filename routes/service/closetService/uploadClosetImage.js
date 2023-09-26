const promisePool = require("../../../config/db")
const request = require('request');

exports.uploadClosetImage = async (data) => {

    const apiUrl = 'http://127.0.0.1:5000/upload'; 
    const filePath = data.filePath; 

    const formData = {
        [fileField]: fs.createReadStream(filePath)
    };

    // request.post({
    //     url: apiUrl,
    //     formData: formData
    // }, (error, response, body) => {
    //     if (error) {
    //         console.error('파일 업로드 오류:', error);
    //         return;
    //     }

    //     console.log('파일 업로드 응답:', body);

    // });

    // const [myFriends, fields] = await promisePool.query(q, [userId, userId]);
    // return myFriends;
}