// server.js
// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');
 
// const app = express();
// const PORT = process.env.PORT || 3000;
 
// mongoose.connect('mongodb://localhost:27017/userprofile', { useNewUrlParser: true, useUnifiedTopology: true });
 
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB');
// });
 
// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
 
// const User = mongoose.model('User', {
//   name: String,
//   username: String,
//   email: String,
//   dob: String,
//   gender: String,
//   description: String
// });
 
// app.get('/api/users', async (req, res) => {
//   try {
//     const users = await User.find();
//     res.json(users);
//   } catch (error) {
//     console.error('Error fetching users:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });
 
// app.post('/api/users', async (req, res) => {
//   try {
//     const newUser = await User.create(req.body);
//     res.json(newUser);
//   } catch (error) {
//     console.error('Error adding user:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });
 
// app.put('/api/users/:userId', async (req, res) => {
//   try {
//     const userId = req.params.userId;
//     if (!userId) {
//       return res.status(400).json({ error: 'User ID is missing' });
//     }
 
//     // Extract the field to be deleted from the request body
//     const { fieldToDelete } = req.body;
 
//     // Check if the field to delete is valid
//     if (!fieldToDelete) {
//       return res.status(400).json({ error: 'Field to delete is missing' });
//     }
 
//     // Create an update object using the $unset operator
//     const updateObject = { $unset: { [fieldToDelete]: 1 } };
 
//     // Use findByIdAndUpdate to update the user document
//     const updatedUser = await User.findByIdAndUpdate(userId, updateObject, { new: true });
 
//     res.json(updatedUser);
//   } catch (error) {
//     console.error('Error updating user:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });
 
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
 

// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
 
const app = express();
const PORT = process.env.PORT || 3001;
 
mongoose.connect('mongodb://localhost:27017/userprofile', { useNewUrlParser: true, useUnifiedTopology: true });
 
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
 
 
 
const User = mongoose.model('User', {
  name: String,
  username: String,
  email: String,
  dob: String,
  gender: String,
  description: String
});
 
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.post('/api/users', async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.json(newUser);
  } catch (error) {
    console.error('Error adding user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
 
app.put('/api/users/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    if (!userId) {
      return res.status(400).json({ error: 'User ID is missing' });
    }
 
    // Extract the field to be deleted from the request body
    const { fieldToDelete } = req.body;
 
    // Check if the field to delete is valid
    if (!fieldToDelete) {
      return res.status(400).json({ error: 'Field to delete is missing' });
    }
 
    // Create an update object using the $unset operator
    const updateObject = { $unset: { [fieldToDelete]: 1 } };
 
    // Use findByIdAndUpdate to update the user document
    const updatedUser = await User.findByIdAndUpdate(userId, updateObject, { new: true });
 
    res.json(updatedUser);
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
 
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});