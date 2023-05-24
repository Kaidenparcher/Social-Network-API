const router = require('express').Router();
const {
  createThought,
  getSingleThought,
  getAllThoughts,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require('../../controllers/thoughtController');

// Route: /api/thoughts
// GET: Get all thoughts
// POST: Create a new thought
router.route('/').get(getAllThoughts).post(createThought);

// Route: /api/thoughts/:thoughtId
// GET: Get a single thought by thoughtId
// PUT: Update a thought by thoughtId
// DELETE: Delete a thought by thoughtId
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

// Route: /api/thoughts/:thoughtId/reactions
// POST: Add a reaction to a thought by thoughtId
router.route('/:thoughtId/reactions').post(addReaction);

// Route: /api/thoughts/:thoughtId/reactions/:reactionId
// DELETE: Delete a reaction from a thought by thoughtId and reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;
