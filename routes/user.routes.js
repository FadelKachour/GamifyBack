UserController = require('../controllers/user.controllers');
const middleware = require('../utils');
module.exports = (server)=> {
    
    server.get('/users',middleware.checkToken,UserController.findAll);
    server.get('/users/:userId',middleware.checkToken,UserController.findOne);
    server.put('/users/:userId',middleware.checkToken,UserController.update);
    server.delete('/users/:userId',middleware.checkToken,UserController.delete);
    server.post('/users',UserController.create);
    server.post('/login',UserController.login);
    
}