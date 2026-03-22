const express = require("express");
const {MongoClient, ServerApiVersion} = require("mongodb");
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000; 

app.use(bodyParser.json());
app.use(cors());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.34pe2jg.mongodb.net/${process.env.DB_NAME}`

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

client.connect().then(connectedClient => {
    const products = client.db(process.env.DB_NAME).collection("devices")
    app.post('/addProducts', (req, res) => {
        const product = req.body;
        products.insertOne(req.body)
        .then(result => {
            console.log(result);
        })
    })
})

console.log(process.env.DB_USER);

app.get('/', (req, res) => {
    res.send("hello world");
})

app.listen(port, () => {
    console.log(`App listening at ${port}`)
})