const router = require('express').Router();
const {
  createUser,
  getSingleUser,
  getAllUsers,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

// Route: /api/users
// GET: Get all users
// POST: Create a new user
router.route('/').get(getAllUsers).post(createUser);

// Route: /api/users/:userId
// GET: Get a single user by userId
// DELETE: Delete a user by userId
// PUT: Update a user by userId
router.route('/:userId').get(getSingleUser).delete(deleteUser).put(updateUser);

// Route: /api/users/:userId/friends/:friendId
// POST: Add a friend to a user by userId and friendId
router.route('/:userId/friends/:friendId').post(addFriend);

// Route: /api/users/:userId/friends/:friendId
// DELETE: Remove a friend from a user by userId and friendId
router.route('/:userId/friends/:friendId').delete(removeFriend);

module.exports = router;
