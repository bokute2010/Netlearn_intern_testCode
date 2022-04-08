const express = require('express');
const mongoose = require('mongoose')
const jokeRoutes = require('./routes/jokeRoute');
const cors = require('cors');
const { urlencoded } = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express()

app.use(cors());

app.use(urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Success response!');
})

app.use(jokeRoutes)

const uri = process.env.DATABASE_URL;
const PORT = process.env.PORT;

mongoose.connect(uri)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        })
    })
console.log('MongoDB connected');
