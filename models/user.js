var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;
var usersSchema = new Schema({
    firstname: {
        desc: "User firstname",
        type: String,
        required: true
    },
    lastname: {
        desc: "User lastname",
        type: String,
        required: true
    },
    username: {
        desc: "User name",
        type: String,
        lowercase: true, 
        required: [true, "can't be blank"], 
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
        index: true
    },
    email: {
        desc: "User mail",
        type: String, 
        lowercase: true, 
        required: [true, "can't be blank"], 
        match: [/\S+@\S+\.\S+/, 'is invalid'], 
        index: true
    },
    password: {
        desc: "User Password.",
        trim: true,
        type: String,
        required: true,
        select: false,
    },
    usertype: {
        desc: "User roles.",
        trim: true,
        type: String,
        enum: [ "User","Author","Admin"],
        default: "User",
        required: true,
    },
    follow: {
        desc: "User Facebook ID.",
        type: String,
        // required: true,
    },
    profilePicture: {
        desc: "User profile picture.",
        type: String,
        // required: true,
    },
    deleteflag: {
        desc: "User Status.",
        type: Boolean,
        default: false
    } 
}, {
    timestamps: true
});
usersSchema.plugin(uniqueValidator, {message: 'is already taken.'});
module.exports = usersSchema;