const Router = require('express').Router();
const init = require('../../lib/db');

Router.get('/', async (req, res) =>{
    try {
        const {db} = await init();
        const data = await db.listCollections();
        const collections = await data.toArray();
        if (collections){
            let result = collections.map((item, index) => {
                return {
                    name: item.name,
                    id: index
                }
            } );
            console.log(result);
            res.json(result);
            return;
        }
        res.json([]);
    }
    catch (e){
        console.log(e);
        res.json({error: e})
    }
    // res.send('index');
});

Router.get('/:category', async (req, res)=>{
    if (req.params.category){
        const {db} = await init();
        let collection = await db.collection(req.params.category);
        const blenderTips = await collection.find({}).toArray();
        res.json(blenderTips);
        return;
    }
    res.status(400).json({ message: "invalid parameter"});
})

module.exports = Router;