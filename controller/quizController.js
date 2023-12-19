const quizModel = require("../models/quizModel");

const postQuestion = async (req , res)=>{
  try {
    const {category,questions,duration} = req.body;
    const createdBy = req.user;

    const quiz = new quizModel({
      category,
      questions,
      duration,
      createdBy,
    });
  
    await quiz.save();
    res.json({ success: true, quiz });
  } catch (error) {
    res.json({error})
  }
}

const participateQuiz = async (req, res) => {
  try {
    const quizId = req.params.id;
    const userId = req.user._id;

    const quiz = await quizModel.findById(quizId).populate('category');

    const currentTime = new Date();
    const endTime = new Date(quiz.createdAt.getTime() + quiz.duration * 1000);

    if (currentTime > endTime) {
      return res.status(400).json({ success: false, message: 'Quiz has expired.' });
    }

    const categoryQuestions = quiz.questions.filter(question => question.category === req.params.category);

    const user = await userModel.findById(userId);

    let userPoints = user.points || 0;

    const responses = [];
    for (const question of categoryQuestions) {
     
      const userResponse = req.body.userResponse; // Assuming it comes from the request body

      if (userResponse === question.options[question.correctOption]) {
        userPoints++; 
      }

      responses.push({
        question: question.text,
        userResponse,
        isCorrect: userResponse === question.options[question.correctOption],
      });
    }

    user.points = userPoints;
    await user.save();

    res.json({ success: true, responses, userPoints });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports={
  postQuestion,
  participateQuiz
}