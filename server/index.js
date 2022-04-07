const express = require('express');
const mongoose = require('mongoose')
const jokeRoutes = require('./routes/jokeRoute');
const cors = require('cors');
const { urlencoded } = require('express');

const connectDB = async () => {
    try {
        mongoose.connect('mongodb+srv://funix:funix@cluster0.xox99.mongodb.net/netlearn?retryWrites=true&w=majority');
        console.log('MongoDB connected');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
connectDB()

const app = express()

app.use(cors());

app.use(urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Success response!');
})

app.use(jokeRoutes)



app.listen(5000, () => console.log('This app is listening on port 5000.'))