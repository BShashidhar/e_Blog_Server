var Users = require('../controllers/userscontroller');
module.exports = function(router) {
    router.post('/user/create', Users.createUser);
    router.get('/getusers', Users.getUsers);
    router.get('/getuser/:username', Users.getUser);
    router.put('/updateuser/:email', Users.updateUser);
    router.delete('/removeuser/:email', Users.removeUser);
}
