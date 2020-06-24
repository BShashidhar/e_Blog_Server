var mongoose = require('mongoose');
var categorysSchema = require('../models/category');

categorysSchema.statics = {
    create : function(data, cb) {
        var category= new this(data);
        category.save(cb);
    },

    get: function(query, cb) {
        this.find(query, cb);
    },

    getByName: function(query, cb) {
        this.find(query, cb);
    },

    update: function(query, updateData, cb) {
        this.findOneAndUpdate(query, {$set: updateData},{new: true}, cb);
    },

    delete: function(query, cb) {
        this.findOneAndDelete(query,cb);
    }
}

var categorysModel = mongoose.model('Categorys', categorysSchema);
module.exports = categorysModel;