const express = require('express');

const {
  deleteUserById,
  getAllUsers,
  getUserById,
  modifyUser,
  createUser,
} = require('../controllers/UserC.js');

//User stub for testing
const usersStub = [
  {
    "id": "id",
    "name": "name"
  },
  {
    "id": "anotherId",
    "name": "anotherName"
  }
]

const router = express.Router();


router.get('/users/', async (req, res) => {
  try {
    //const users = await getAllUsers();
    const users = usersStub;
    res.status(200).json(users); 
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error: error.message });
  }
});


router.get('/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
    //const user = await getUserById(id);
    user = usersStub[id]
    if (user) {
      res.status(200).json(user); 
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user', error: error.message });
  }
});


router.post('/users/', async (req, res) => {
  const newUser = req.body;
  try {
    //const user = await createUser(newUser);
    usersStub.push(newUser);
    res.status(201).json(usersStub); 
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error: error.message });
  }
});


router.put('/users/:id', async (req, res) => {
  const { id } = req.params;
  const payload = req.body;
  try {
    //const user = await modifyUser(id, payload);
    const user = usersStub[id];
    if (user) {
      res.status(200).json(user); 
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating user', error: error.message });
  }
});


router.delete('/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
    //const result = await deleteUserById(id);
    const result = usersStub[id];
    if (result) {
      res.status(200).json({ message: 'User deleted successfully' }); 
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user', error: error.message });
  }
});

module.exports = router;
