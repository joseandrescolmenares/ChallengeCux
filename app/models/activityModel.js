const prompts = require("../../utils/prompts");

const activity = [
  { id: 1, name: "anger", prompt: prompts.anger },
  { id: 2, name: "sad", prompt: prompts.sad },
  { id: 3, name: "happy", prompt: prompts.happy },
];

module.exports = {
  getActivity: () => {
    return activity;
  },
};
