const promisePool = require("../../../config/db")

const getFriend = (friends) => {
    const transformedFriends = friends.map(friend => (friend.usrId));  
    return JSON.stringify(transformedFriends);
}

exports.addTravel = async (userData) => {
    const outerList = [];
    const topList = [];
    const bottomList = [];
    const shoesList = [];

    userData.coordi.forEach(item => {
        outerList.push(item.clothes.outer);
        topList.push(item.clothes.top);
        bottomList.push(item.clothes.bottom);
        shoesList.push(item.clothes.shoes);
    });

    const data = [
        userData.usrId, 
        JSON.stringify(userData.travlDate),
        getFriend(userData.travlFriends), 
        userData.travlPlace,
        userData.travlCategory,
        userData.travlReason,
        JSON.stringify(outerList),
        JSON.stringify(topList),
        JSON.stringify(bottomList),
        JSON.stringify(shoesList),
    ]


    try{
        const q = "INSERT INTO TRAVEL (usrId, travlDate, travlFriends, travlPlace, travlCategory, travlReason, outerSeq, topSeq, bottomSeq, shoesSeq) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);";
        const [row, fields] = await promisePool.query(q, data);
        return {"success": true}
    }
    catch{
        return {"success": false}
    }
}
