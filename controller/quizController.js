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

module.exports={
  postQuestion
}