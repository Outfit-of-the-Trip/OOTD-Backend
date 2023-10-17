const promisePool = require("../../../config/db")
const spawn = require('child_process').spawn;

  const getSeason = (date) => {
      const currentDate = new Date(date);
      const currentMonth = currentDate.getMonth() + 1;
    
      if (currentMonth >= 3 && currentMonth <= 5) {
        return '봄';
      } else if (currentMonth >= 6 && currentMonth <= 8) {
        return '여름';
      } else if (currentMonth >= 9 && currentMonth <= 11) {
        return '가을';
      } else {
        return '겨울';
      }
  }


  exports.getRecommend = (data) => {

    return new Promise((resolve, reject) => {

        const userId = data.userId;
        const date = data.date;
        const season = getSeason(data.date[0]);
        const gender = data.gender;
        const reason = data.reason;
        const category = data.category;

        try{
          const pythonProcess = spawn('python3', ['routes/service/recommendService/recommend.py', userId, date, season, gender, reason, category]);
        
          let resultData = '';
  
          pythonProcess.stdout.on('data', (result) => {
            resultData += result.toString(); 
          });
  
          pythonProcess.stderr.on('data', (data) => {
              console.error("Error: " + data.toString());
          });
  
          pythonProcess.on('close', (code) => {
              if (code === 0) {
                  resolve(resultData);
              } else {
                  reject(new Error(`Python script exited with code ${code}`));
              }
          });

        }
        catch{
          return {'success': false}
        }


    });
};

