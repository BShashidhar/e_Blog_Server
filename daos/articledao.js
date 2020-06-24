var mongoose = require('mongoose');
var articlesSchema = require('../models/article');

articlesSchema.statics = {
    create : function(data, cb) {
        var article= new this(data);
        article.save(cb);
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
var articlesModel = mongoose.model('Articles', articlesSchema);
module.exports = articlesModel;