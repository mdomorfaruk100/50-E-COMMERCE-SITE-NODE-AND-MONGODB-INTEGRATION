const express = require("express");
const {MongoClient, ServerApiVersion} = require("mongodb");
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
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
    const productCollection = client.db(process.env.DB_NAME).collection("products");
    const ordersCollection = client.db(process.env.DB_NAME).collection("orders");

    
    app.post('/addProduct', (req, res) => {
        const products = req.body;
        productCollection.insertMany(products)
        .then(result => {
            res.send(result);
        })
    })
    
    app.get('/products', (req, res) => {
        productCollection.find().toArray()
        .then(documents => {
            res.send(documents);
        })
    });
    
    app.get('/product/:key', (req, res) => {
        productCollection.find({key: req.params.key}).toArray()
        .then(documents => {
            res.send(documents[0])
        })
    })
    
    app.post('/productsByKeys', (req, res) => {
        const productKeys = req.body;
        productCollection.find({key: {$in : productKeys}})
        .toArray().then(documents => {
            res.send(documents)
        })
    })

    app.post("/addOrder", (req, res) => {
        const orders = req.body;
        ordersCollection.insertOne(orders)
        .then(result => {
            if(result.insertedId){
                res.send(result);
            }
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