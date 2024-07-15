import express, { json } from 'express';
import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const client = await MongoClient.connect(process.env.MONGO_DB_URL);
const db = client.db(process.env.MONGO_DB);

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json())

app.get('/', async (req, res) => {
    try {
        res.send("We are a working express server!");
        console.log("Hello World! We are working!")
    } catch (err) {
        res.status(500).send();
    }
})

// Gets all clothes info 
app.get('/api/clothes', async (req, res) => {
    try {
        const collection = db.collection('clothes');
        const clothes = await collection.find({}).toArray();
        res.json(clothes);
    } catch (err) {
        res.status(500).send();
    }
});

// Gets clothes info by id
app.get('/api/clothes/id=:id', async (req, res) => {
    try {
        const id = req.params.name;
        const collection = db.collection('clothes');
        const clothes = await collection.find({id: id}).toArray();
        res.json(clothes);
    } catch (err) {
        res.status(500).send();
    }
});

// Gets clothes info by name
app.get('/api/clothes/name=:name', async (req, res) => {
    try {
        const name = req.params.name;
        const collection = db.collection('clothes');
        const clothes = await collection.find({name: name}).toArray();
        res.json(clothes);
    } catch (err) {
        res.status(500).send();
    }
});

// Gets clothes info by type
app.get('/api/clothes/type=:type', async (req, res) => {
    try {
        const type = req.params.type;
        const collection = db.collection('clothes');
        const clothes = await collection.find({type: type}).toArray();
        res.json(clothes);
    } catch (err) {
        res.status(500).send();
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});