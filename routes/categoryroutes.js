var Categories = require('../controllers/categoriescontroller');
module.exports = function(router) {
    router.post('/create', Categories.createCategory);
    router.get('/categories', Categories.getCategories);
    router.get('/getCategory/:id', Categories.getCategory);
    router.put('/updateCategory/:id', Categories.updateCategory);
    router.delete('/removeCategory/:id', Categories.removeCategory);
}