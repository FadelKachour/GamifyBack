const bodyParser = require('body-parser');
const express = require('express');
const routes = require('./routes/quest.routes');
const routesProduct = require('./routes/product.routes');
const routesUser = require('./routes/user.routes');
const server = express();
const port = 3050;
const db = require("./models");

const cors = require('cors');
server.use(cors());

db.mongoose
.connect(db.url,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})


server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.set('json spaces', 2);

routes(server);
routesProduct(server);
routesUser(server);

server.listen(port, () =>{
    console.log(`Serveur demarré en écoute sur le port ${port} !, l'adresse http://localhost:${port}`)
});
