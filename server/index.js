const express = require('express');
const cors = require('cors');
require('dotenv').config();
// const routes = require('./routes');
const config = require('../confing')
const path = require('path')
const app = express();

app.use(
    cors({
        origin: true,
        credentials: true,
    }),
);
app.use(express.urlencoded({
    extended: true,
}));
app.use(express.json());
// app.use('/', routes);
app.use(express.static(path.join(__dirname, "..", "dist")));
app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "../dist", "index.html"))
});

// const PORT = process.env.PORT || 3000;
app.listen(config.PORT, () => console.log(`Соединение с сервером прошло успешно PORT: ${config.PORT}`));

