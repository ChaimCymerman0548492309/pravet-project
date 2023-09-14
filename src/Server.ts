import express from 'express';
import mongoose from 'mongoose';


async function connectDB() {
    try {
       await mongoose.connect('mongodb://localhost:27017')
    }

    catch (err) {
        console.log(err)
    }
}

connectDB()

const port = 8200

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
})