const express = require("express");
const { requireSignin } = require("../middlewares/atuhMiddleware");
const { postQuestion, participateQuiz } = require("../controller/quizController");
const quizRouter = express.Router();

quizRouter.post("/post-quiz-question", requireSignin, postQuestion)
quizRouter.post("/quizzes/:category", requireSignin, participateQuiz)

module.exports = {
  quizRouter,
};
