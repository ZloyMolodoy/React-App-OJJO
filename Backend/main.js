require("dotenv").config();
const express = require('express')
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require("mongoose");
const router = require("./route/index.js")

const app = express()

const PORT = process.env.PORT || 3000;

//Middle
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use('/api', router);

const start = async () => 
{
    try {
        console.log("Запуск сервера");
        // await mongoose.connect(process.env.DB_URL, {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true
        // })
        app.listen(PORT, () => console.log(`Сервер запущен с портом: ${PORT}`));
    } catch (e) {
        console.log(e);
    }
}

// start()