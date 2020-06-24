var Articles = require('../daos/articledao');

exports.createArticle = function (req, res, next) {
    var article = {
        articlename:req.body.articlename,
        shortarticle: req.body.shortarticle,
        longarticle:req.body.longarticle,
        image: req.body.image,
        tag:req.body.tag,
        share: req.body.share,
        deleteflag:req.body.deleteflag
    };

    Articles.create(article, function(err, article) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Article created successfully"
        })
    })
}

exports.getArticles = function(req, res, next) {
    Articles.get({}, function(err, articles) {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json({
            articles: articles
        })
    })
}

exports.getArticle = function(req, res, next) {
    Articles.get({username: req.params.username}, function(err, articles) {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json({
            articles: articles
        })
    })
}

exports.updateArticle = function(req, res, next) {
    var article = {
        articlename:req.body.articlename,
        shortarticle: req.body.shortarticle,
        longarticle:req.body.longarticle,
        image: req.body.image,
        tag:req.body.tag,
        share: req.body.share,
        deleteflag:req.body.deleteflag
    };
    
    Articles.update({_id: req.params.id}, article, function(err, article) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Article updated successfully"
        })
    })
}

exports.removeArticle = function(req, res, next) {
    Articles.delete({_id: req.params.id}, function(err, article) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Article deleted successfully"
        })
    })
}