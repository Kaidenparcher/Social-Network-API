const { Schema, model } = require('mongoose');

const moment = require('moment');

// Define the schema for the nested reaction documents
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (date) => moment(date).format('MM/DD/YYYY'),
    },
  }
);

// Define the schema for the thought documents
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxLength: 280,
      minLength: 1,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (date) => moment(date).format('MM/DD/YYYY'),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema], // Include the array of nested reactions
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Define a virtual property 'reactionCount' to calculate the number of reactions
thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

// Create the Thought model using the thoughtSchema
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
