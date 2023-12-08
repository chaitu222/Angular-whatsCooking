// models/userregi.js

const mongoose = require('mongoose');

const userRegiSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  
});

const UserRegi = mongoose.model('UserRegi', userRegiSchema);

module.exports = UserRegi;
