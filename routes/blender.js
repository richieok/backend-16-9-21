const Router = require('express').Router();
const init = require('../lib/db');

Router.get('/', async (req, res) => {
    const { collection } = await init();
    const blenderTips = await collection.find({}).toArray();
    if (blenderTips) {
        res.json(blenderTips);
        return;
    }
    res.status(400).json({});

});

Router.get('/search', (req, res)=>{
    console.log(req.query);
    
    res.end();
});

Router.get('/search/:id', (req, res)=>{
    console.log(req.query);
    console.log(req.params);
    res.send(req.params.id);
});

Router.get('/:any', (req, res)=>{
    console.log(req.params.any);
    res.json({
        message: req.params.any
    });
});

Router.post('/',(req, res)=>{
    console.log(req.body);
    res.json({message: 'Ok'});
});

module.exports = Router;