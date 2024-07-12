import express, { json } from 'express';

const app = express();
const PORT = 3000;

app.get('/', async (req, res) => {
    try {
        res.send("We are a working express server!");
        console.log("Hello World! We are working!")
    } catch (err) {
        console.error("Error: ", err);
        res.status(500).send("No clothes for you!")
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});