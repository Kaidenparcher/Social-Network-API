const router = require("express").Router();

const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/userController");

// ./api/users
// Endpoint for getting all users and creating a new user
router.route("/").get(getUsers).post(createUser);

// ./api/users/<userid>
// Endpoint for getting a single user, updating a user, and deleting a user
router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

// ./api/users/< userid>/friends/<userid>
// Endpoint for adding a friend to a user and deleting a friend from a user
router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);

module.exports = router;
