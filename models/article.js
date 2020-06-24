const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;
const articlesSchema = new Schema({
    articlename: {
        type: String,
        required: true
    },
    shortarticle: {
        type: String,
        required: true
    },
    longarticle: {
        type: String,
        required: true
    },
    image:{
        type: String,
    },
    tag: {
        type: [String],
    },
    share: {
        type: String,
    },
    deleteflag: {
        type: Boolean,
        default: false
    }    
}, {
    timestamps: true
});
articlesSchema.plugin(uniqueValidator, {message: 'is already taken.'});
module.exports = articlesSchema;