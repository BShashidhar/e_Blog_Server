var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;
var categorysSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    categorytype: {
        type: String,
        required: true
    },
    deleteflag: {
        type: Boolean,
        default: false
    }  
}, {
    timestamps: true
});
categorysSchema.plugin(uniqueValidator, {message: 'is already taken.'});
module.exports = categorysSchema;