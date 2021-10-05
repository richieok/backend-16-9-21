const Router = require('express').Router();
const axios = require('axios');
const cheerio = require('cheerio');

Router.get('/', (req, res)=>{
    res.json({
        video_id: null
    });
});

Router.get('/:video_id', async (req, res) =>{
    let resp = await axios.get(`https://www.youtube.com/watch?v=${req.params.video_id}`);
    const data = resp.data;
    const $ = cheerio.load(data);
    // $('.view-count').text()
    console.log(data);
    // console.log($('#info').text());
    // console.log($('.view-count').text());

    res.json({
        video_id: req.params.video_id
    });
});

module.exports = Router;