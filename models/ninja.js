const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//creating ninja Scheme and model
const NinjaSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    rank: {
        type: String
    },
    available: {
        type: Boolean,
        default: false
    },
    long:{},
    lat:{}
});
const Ninja = mongoose.model('ninja', NinjaSchema);
module.exports = Ninja;