const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/movieApp', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log('connection OK')
})
.catch(err => {
    console.log('connection ERROR')
    console.log(err)
})

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
})

const Movie = mongoose.model('Movie', movieSchema)

// Movie.findOneAndUpdate({title: 'Google'}, {score: 11.11}, {new: true}).then(m
//     => console.log(m))
// 👆変更を加えた結果を取得　find~~ 