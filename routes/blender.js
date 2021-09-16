const Router = require('express').Router();

Router.get('/', (req, res)=>{
    res.json({
        message: "Blender"
    });
});

Router.get('/search', (req, res)=>{
    console.log(req.query);
    console.log(req.params);
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