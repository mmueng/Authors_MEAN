const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(__dirname + '/public/dist/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const flash = require("express-flash");
app.use(flash());

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/authors_Mean", { useNewUrlParser: true });

const AuthorSchema = new mongoose.Schema({
    // validation
    // name: String
    name: { type: String, required: true }
}, { timestamps: true });

const Author = mongoose.model("Author", AuthorSchema);

app.get('/author', (req, res) => {
    Author.find()
        .then(data => res.json({ msg: "Success - All Authors", result: data }))
        .catch(err => res.json({ msg: "Error - Can not find all Authors", err: err }));
});
app.get('/author/:id', (req, res) => {
    Author.findOne({ _id: req.params.id })
        .then(data => res.json({ msg: "Success - Seleted Author", result: data }))
        .catch(err => res.json({ msg: "Error - Can not find - Something went wrong", result: data }))
});

app.post('/author', (req, res) => {
    console.log(req.body.name)
    Author.create(req.body)
        .then(data => res.json({ msg: "Succes", result: data }))
        .catch(err => res.json({ msg: "Error", err: err }))
});
// edit route
app.put('/author/:id', (req, res) => {
    Author.findOneAndUpdate({ _id: req.params.id }, req.body, { runValidators: true })
        .then(data => res.json({ msg: "Success - Edit Author", result: data }))
        .catch(err => res.json({ msg: "Error", err: err }));
})

app.delete('/author/:id', (req, res) => {
    console.log(req.params.id)
    Author.findOneAndRemove({ _id: req.params.id })
        .then(data => res.json({ msg: "Success", result: data }))
        .catch(err => res.json({ msg: "Error", err: err }));
})


app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});

app.listen(8000, () => console.log("Listening on port 8000"));