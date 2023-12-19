const mongoose = require("mongoose");

const quizModel = mongoose.model('Quiz', new mongoose.Schema({
  questions: [
    {
      text: String,
      options: [String],
      correctOption: Number,
      category: String
    },
  ],
  duration: Number,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'gurucool_users' },
}));


module.exports = {
  quizModel,
};
