// This code runs on the server
// import dotenv from 'dotenv';
// dotenv.config();
const { MongoClient } = require('mongodb');
// const { MongoClient } = require('mongodb');

const { DB_URI } = process.env;
// console.log(DB_URI);

let db = null;
let client = null;
let collection = null;

module.exports = async function init() {
    if (!client) {
        client = new MongoClient(DB_URI, { useUnifiedTopology: true });
        try {
            await client.connect();
            console.log('client created');
            // db = await client.db(dbName);
            db = await client.db();
            collection = await db.collection('blender');
            return { client, db, collection };
        }
        catch (e) {
            console.log(e);
        }
    } else {
        console.log('client already created');
        return { client, db, collection };
    }
}