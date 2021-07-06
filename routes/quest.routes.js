QuestController = require('../controllers/quest.controllers');
module.exports = (server)=> {
    server.get('/quests',QuestController.findAll);
    server.get('/quest/:id',QuestController.findOne);
    server.put('/quest/:id',QuestController.update);
    server.post('/quest',QuestController.create);
    server.delete('/quest/:id',QuestController.delete);
    
}