const Joke = require('../models/jokeModel');

exports.putJoke = async (req, res) => {
    try {
        const { like, jokeId } = req.body;
        await Joke.findById(jokeId)
            .then(joke => {
                like ? joke.like += 1 : joke.dislike += 1
                joke.save()
            })
        await res.status(200).json({})
    } catch (error) {
        res.status(200).json(error)
    }
}

exports.addJoke = async (req, res) => {
    try {
        const newJoke = new Joke({
            story: req.body.newStory,
        })
        await newJoke.save();
        await res.json(newJoke)
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.getJoke = async (req, res) => {
    try {
        const number = + req.query.number || 0;
        await Joke.find()
            .then(jokes => {
                return res.json({ story: jokes[number], totalStories: jokes.length })
            })
    } catch (error) {
        console.log(error)
    }
}