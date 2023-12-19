const mongoose = require("mongoose");

const quizModel = mongoose.model('Quiz', new mongoose.Schema({
  category: String,
  questions: [
    {
      text: String,
      options: [String],
      correctOption: Number,
    },
  ],
  duration: Number,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'gurucool_users' },
}));


module.exports = {
  quizModel,
};
