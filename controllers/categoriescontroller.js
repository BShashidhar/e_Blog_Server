var Categories = require('../daos/categorydao');

exports.createCategory = function (req, res, next) {
    var category = {
        id:req.body.id,
        categorytype:req.body.categorytype,
        deleteflag: req.body.deleteflag
    };

    Categories.create(category, function(err, category) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Category created successfully"
        })
    })
}

exports.getCategories = function(req, res, next) {
    Categories.get({}, function(err, categories) {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json({
            categories: categories
        })
    })
}

exports.getCategory = function(req, res, next) {
    Categories.get({username: req.params.username}, function(err, users) {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json({
            users: users
        })
    })
}

exports.updateCategory = function(req, res, next) {
    var category = {
        id:req.body.id,
        categorytype:req.body.categorytype,
        deleteflag: req.body.deleteflag        
    }
    Categories.update({_id: req.params.id}, category, function(err, category) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Category updated successfully"
        })
    })
}

exports.removeCategory = function(req, res, next) {
    Users.delete({_id: req.params.id}, function(err, user) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Category deleted successfully"
        })
    })
}