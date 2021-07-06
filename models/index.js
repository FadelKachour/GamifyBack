const dbConfig = require("../config/dbconfig")

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.url = dbConfig.url;
db.quests = require("./quest.model")(mongoose);
db.products = require("./product.model")(mongoose);
db.users = require("./user.model")(mongoose);

module.exports = db;