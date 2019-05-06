const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname + '/dist/google-books')));

const baseUrl = process.env.MONGOLAB_URI;

mongoose.connect(baseUrl, {useNewUrlParser: true});

const Schema = mongoose.Schema;

const bookSchema = Schema({
    title: String,
    author: String,
    url: String,
    image: String,
    description: String
});

const Book = mongoose.model('Book', bookSchema);

app.get('/api/books', (req, res) => {
    Book.find()
        .then(data => {
            res.json(data);
        })
        .catch(error => console.log(error))
});

app.post('/api/books', (req, res) => {
    const favBook = new Book(req.body);
    favBook.save();
    res.json({"message": "book successfully saved..."})
});

app.delete('/api/books/:_id', (req, res) => {
    console.log(req.params._id);
    Book.deleteOne({_id: req.params._id})
        .then(results => {
            res.json(results)
        })
        .catch(error => console.log(error))
})

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/google-books/index.html'));
});

app.listen(PORT, () => console.log(`Server currently listening @ 'http://localhost:${PORT}/`));