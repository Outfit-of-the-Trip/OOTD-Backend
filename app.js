const express = require('express');
const routes = require('./routes');
const app = express();
const bodyParser = require("body-parser");
const config = require("./config/config")

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', routes);

app.listen(config.PORT, () => {console.log(`[+] Listening on port ${config.PORT}`);});