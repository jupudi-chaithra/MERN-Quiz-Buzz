import {React, useState} from 'react'
import './game.css'

function HTML() {
  const questions = [
    {
      questionText: "HTML stands for: ",
      answerOptions: [
          {answerText: "Hyper Text Markup Language", isCorrect: true},
          {answerText: "Hyperlinks and Text Markup Language", isCorrect: false},
          {answerText: "Home Tool Markup Language", isCorrect: false},
          {answerText: "None", isCorrect: false},
      ],
    },
    {
      questionText: "How is document type initialized in HTML5?",
      answerOptions: [
          {answerText: "</DOCTYPE HTML>", isCorrect: false},
          {answerText: "</DOCTYPE>", isCorrect: false},
          {answerText: "<!DOCTYPE HTML>", isCorrect: true},
          {answerText: "</DOCTYPE html>", isCorrect: false},
      ],
    },
    {
      questionText: "Which of the following attributes is used to add link to any element?",
      answerOptions: [
        {answerText: "link", isCorrect: false},
        {answerText: "href", isCorrect: true},
        {answerText: "ref", isCorrect: false},
        {answerText: "newref", isCorrect: false},
      ],
    },
    {
      questionText: "Which of the following characters indicate closing of a tag?",
      answerOptions: [
        {answerText: "*", isCorrect: false},
        {answerText: "/", isCorrect: true},
        {answerText: ",", isCorrect: false},
        {answerText: "!", isCorrect: false},
      ],
    },
    {
      questionText: "What is the difference between XML and HTML?",
      answerOptions: [
        {answerText: "HTML is used for exchanging data, XML is not.", isCorrect: false},
        {answerText: "XML is used for exchanging data, HTML is not", isCorrect: true},
        {answerText: "HTML can have user defined tags, XML cannot", isCorrect: false},
        {answerText: "None of the above", isCorrect: false},
      ],
    },
    {
      questionText: "Opening Tag of HTML Tag is called as ________.",
      answerOptions: [
        {answerText: "Closed Tag", isCorrect: false},
        {answerText: "Starting Tag", isCorrect: true},
        {answerText: "Forward Tag", isCorrect: false},
        {answerText: "Ending Tag", isCorrect: false},
      ],
    },
    {
      questionText: "HTML program is saved using _________ extension.",
      answerOptions: [
        {answerText: ".htl", isCorrect: false},
        {answerText: ".html", isCorrect: true},
        {answerText: ".htm", isCorrect: false},
        {answerText: ".ht", isCorrect: false},
      ],
    },
    {
      questionText: "Who was the primary author of HTML?",
      answerOptions: [
        {answerText: "Brendan Eich", isCorrect: false},
        {answerText: "Sabeer Bhatiya", isCorrect: false},
        {answerText: "Google Inc.", isCorrect: false},
        {answerText: "Tim Berners-Lee", isCorrect: true},
      ],
    },
    {
      questionText: "Which of the following is valid colour code ?",
      answerOptions: [
        {answerText: "#000000", isCorrect: true},
        {answerText: "#00000", isCorrect: false },
        {answerText: "#000", isCorrect: false},
        {answerText: "#000000000", isCorrect: false},
      ],
    },
    {
      questionText: "Which of the following is used increase the row height?",
      answerOptions: [
        {answerText: "Cellspacing", isCorrect: false},
        {answerText: "Cellpadding", isCorrect: false},
        {answerText: "Rowspan", isCorrect: true},
        {answerText: "Colspan", isCorrect: false},
      ],
    }
  ]
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};


  return (
    <div className='x'>
			{showScore ? (
				<div className='score-section'>
          <div>
					  You scored {score} out of {questions.length}
          </div>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
          
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
  )
}

export default HTML