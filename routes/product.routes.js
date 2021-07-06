ProductController = require('../controllers/product.controllers');
module.exports = (server)=> {
    server.get('/Products',ProductController.findAll);
    server.get('/Product/:id',ProductController.findOne);
    server.put('/Product/:id',ProductController.update);
    server.post('/Product',ProductController.create);
    server.delete('/Product/:id',ProductController.delete);
    
}