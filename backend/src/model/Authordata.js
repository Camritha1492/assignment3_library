const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/CaseStudy2');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    name: String,
    genre: String,
    image: String,
    desc: String
});

var Authordata = mongoose.model('authordata',AuthorSchema);
 module.exports = Authordata;
