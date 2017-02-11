var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Location = new Schema({
    name: String,
    type: String,
    phone_number: String
});
module.exports = mongoose.model('Location', Location);