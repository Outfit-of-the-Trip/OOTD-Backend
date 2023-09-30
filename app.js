const express = require('express');
const routes = require('./routes');
const app = express();
const bodyParser = require("body-parser");
const config = require("./config/config")
const cors = require("cors");
const fs = require("fs");
const path = require("path");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors({
    origin: '*',
}));

app.use('/api', routes);

app.listen(config.PORT, () => {
    console.log(`[+] Listening on port ${config.PORT}`);
    const uploadFolder = path.join(__dirname, 'uploads');

    fs.readdir(uploadFolder, (err, files) => {
        if (err) {
            console.error('파일 목록을 가져오는 중 오류 발생:', err);
            return;
        }

        files.forEach((file) => {
            const filePath = path.join(uploadFolder, file);

            fs.unlink(filePath, (err) => {
                if (err) {
                    console.error(`파일 삭제 중 오류 발생 (${file}):`, err);
                } else {
                    console.log(`파일 삭제 완료 (${file})`);
                }
            });
        });
    });

});