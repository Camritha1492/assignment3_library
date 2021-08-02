const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/CaseStudy2');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
   email: String,
   password: String,
   address: String,
   address2: String,
   city: String,
   phone: String
});

var Userdata = mongoose.model('userdata',UserSchema);
 module.exports = Userdata;