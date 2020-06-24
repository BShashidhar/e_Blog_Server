var Articles = require('../controllers/articlescontroller');
module.exports = function(router) {
    router.post('/create', Articles.createArticle);
    router.get('/articles', Articles.getArticles);
    router.get('/getArticle/:id', Articles.getArticle);
    router.put('/updateArticle/:id', Articles.updateArticle);
    router.delete('/removeArticle/:id', Articles.removeArticle);
}