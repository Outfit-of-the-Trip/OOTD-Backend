const promisePool = require("../../../config/db")

function transformArray(arr) {
    return arr.reduce((result, item) => {
      const { clothesId, clothesImg } = item;
      if (result[clothesId]) {
        result[clothesId].push(clothesImg);
      } else {
        result[clothesId] = [clothesImg];
      }
      return result;
    }, {});
  }
  
exports.getClosetData = async (data) => {
    const q = "SELECT clothesId, clothesImg FROM CLOSET WHERE usrId = ?";
    const [rows, fields] = await promisePool.query(q, data);
    const transformedObject = transformArray(rows);

    return transformedObject;
}