const mongoose = require('mongoose');
mongoose.Promise = global.Promise; //whats the purpose of this?

const db = {};

db.mongoose = mongoose;

db.user = require('./user.model');
db.role = require('./role.model');

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
