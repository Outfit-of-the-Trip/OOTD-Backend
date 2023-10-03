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
  const getFriend = (friends) => {
      const filteredFriends = friends.filter(friend => friend.look !== 'None');
      const transformedFriends = filteredFriends.map(friend => ({
          friendId: friend.usrId,
          look: friend.look
      }));  
      return transformedFriends;
  }
  const getReason = (reason) => {
      if(reason == "배낭여행" || reason == "레져여행" || reason == "캠핑" || reason == "엠티") return 0;
      else if(reason == "호캉스" || reason == "핫플레이스" || reason == "인생샷") return 1;
      else return 2;
  }


exports.getRecommend = async (data) => {
    
    const userId = data.userId
    const date = data.date
    const season = getSeason(data.date[0])
    const gender = data.gender
    const friend = getFriend(data.friend)
    const place = data.place
    const reason = getReason(data.reason)
    const category = data.category

    const sendData = {
      "userId": userId,
      "date_lst": date,
      "season": season,
      "gender": gender,
      "friend": friend,
      "place": place,
      "reason": reason,
      "category": category
    }
    console.log(sendData)

    // const result_02 = spawn('python3', ['routes/service/recommendService/recommend.py', date, season, gender, reason, category]);
    // result_02.stdout.on('data', (result)=>{
    //   console.log(result.toString());
    // });
    // result_02.stderr.on('data', (data) => {
    //   console.error("Error: " + data.toString());
    // });

    const q = "SELECT * FROM USER";
    const [rows, fields] = await promisePool.query(q);
    return sendData;
}