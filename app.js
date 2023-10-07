const express = require('express');
const routes = require('./routes');
const app = express();
const bodyParser = require("body-parser");
const config = require("./config/config")
const cors = require("cors");
const path = require('path');
const https = require('https');
const fs = require('fs');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({
    limit : "50mb"
}));

app.use(express.static(path.join(__dirname, 'react-frontend/build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/react-frontend/build/index.html'));
});

app.use(cors({
    origin: '*',
}));


app.use('/api', routes);

app.listen(config.PORT, () => console.log(`[+] Listening on port ${config.PORT}`));