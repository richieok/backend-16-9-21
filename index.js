require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "http://localhost";

const blenderTips = require('./routes/blender');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/tips/blender', blenderTips);

app.listen(PORT, ()=>{
    console.log(`server listening at ${HOST}:${PORT}`);
});
