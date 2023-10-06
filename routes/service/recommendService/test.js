const promisePool = require("../../../config/db")
const spawn = require('child_process').spawn;

exports.test = () => {

    return new Promise((resolve, reject) => {
        const pythonProcess = spawn('python3', ['routes/service/recommendService/recommend.py', 'admin', "['2023-09-10']", '겨울', 'M', '배낭여행', '전통']);
        
        let resultData = '';

        pythonProcess.stdout.on('data', (result) => {
          resultData += result.toString();
        });

        pythonProcess.stderr.on('data', (data) => {
            console.error("Error: " + data.toString('utf-8'));
        });

        pythonProcess.on('close', (code) => {
            if (code === 0) {
                resolve(resultData);
            } else {
                reject(new Error(`Python script exited with code ${code}`));
            }
        });
    });
};

