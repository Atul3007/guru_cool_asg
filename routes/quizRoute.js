const express = require("express");
const { requireSignin } = require("../middlewares/atuhMiddleware");
const { postQuestion } = require("../controller/quizController");
const quizRouter = express.Router();

quizRouter.post("/post-quiz-question", requireSignin, postQuestion)

module.exports = {
  quizRouter,
};
