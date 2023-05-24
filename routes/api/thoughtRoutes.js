const router = require("express").Router();

const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require("../../controllers/thoughtController");

// Endpoint for getting all thoughts and creating a new thought
router.route("/").get(getThoughts).post(createThought);

// Endpoint for getting a single thought, updating a thought, and deleting a thought
router.route("/:thoughtId").get(getSingleThought).put(updateThought).delete(deleteThought);

// Endpoint for creating a reaction for a thought
router.route("/:thoughtId/reactions").post(createReaction);

// Endpoint for deleting a reaction from a thought
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;