import {React, useState} from 'react'
import './game.css'


function CSS() {
  const questions = [
    {
      questionText: "What does CSS stand for?",
      answerOptions: [
          {answerText: "Creative Style Sheets", isCorrect: false},
          {answerText: "Computer Style Sheets", isCorrect: false},
          {answerText: "Cascading Style Sheets", isCorrect: true},
          {answerText: "Colorful Style Sheets", isCorrect: false},
      ],
    },
    {
      questionText: "Which of the following is a component of CSS style rule?",
      answerOptions: [
          {answerText: "Selector", isCorrect: false},
          {answerText: "Property", isCorrect: false},
          {answerText: "Value", isCorrect: false},
          {answerText: "All of the above", isCorrect: true},
      ],
    },
    {
      questionText: "Which of the following property is used to control the repetition of an image in the background?",
      answerOptions: [
        {answerText: "background-color", isCorrect: false},
        {answerText: "background-image", isCorrect: false},
        {answerText: "background-repeat", isCorrect: true},
        {answerText: "background-position", isCorrect: false},
      ],
    },
    {
      questionText: "Which of the following property is used to control the flow and formatting of text?",
      answerOptions: [
        {answerText: "white-space", isCorrect: true},
        {answerText: "text-shadow", isCorrect: false},
        {answerText: "text-decoration", isCorrect: false},
        {answerText: "text-transform", isCorrect: false},
      ],
    },
    {
      questionText: "How can you created rounded corners using CSS3?",
      answerOptions: [
        {answerText: "border[round]: 30px;", isCorrect: false},
        {answerText: "corner-effect: round;", isCorrect: false},
        {answerText: "border-radius: 30px;", isCorrect: true},
        {answerText: "alpha-effect: round-corner;", isCorrect: false},
      ],
    },
    {
      questionText: "How to you modify a border image using CSS3?",
      answerOptions: [
        {answerText: "border: url(image.png);", isCorrect: false},
        {answerText: "border-variable: image url(image.png);", isCorrect: false},
        {answerText: "border-image: url(border.png) 30 30 round;", isCorrect: true},
        {answerText: "None", isCorrect: false},
      ],
    },
    {
      questionText: "How to add text shadow using CSS3?",
      answerOptions: [
        {answerText: "font: shadowed 5px 5px 5px grey;", isCorrect: false},
        {answerText: "font-shadow: 5px 5px 5px grey;", isCorrect: false},
        {answerText: "text-shadow: 5px 5px 5px grey;", isCorrect: true},
        {answerText: "shadow: text 5px 5px 5px grey;", isCorrect: false},
      ],
    },
    {
      questionText: "How to force a word wrap using CSS3?",
      answerOptions: [
        {answerText: "word-wrap: break-word;", isCorrect: true},
        {answerText: "text-wrap: break-word;", isCorrect: false},
        {answerText: "text-wrap: force;", isCorrect: false},
        {answerText: "text-width: set;", isCorrect: false},
      ],
    },
    {
      questionText: "Which of these are valid CSS3 transformation statements?",
      answerOptions: [
        {answerText: "matrix()", isCorrect: true},
        {answerText: "modify()", isCorrect: false },
        {answerText: "skip()", isCorrect: false},
        {answerText: "simulate()", isCorrect: false},
      ],
    },
    {
      questionText: "What does RGBa mean?",
      answerOptions: [
        {answerText: "Review Get assistance Back-up your information acquire proof", isCorrect: false},
        {answerText: "Red Green Blue alpha", isCorrect: true},
        {answerText: "Red Gray Brown alpha", isCorrect: false},
        {answerText: "Red Gold Black alpha", isCorrect: false},
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
      Postdata()
		}
	};

  const getData = async () => {
    const res = await fetch('/home', {
    headers: {
      Accept : "application/json",
      "Content-Type" : "application/json"
    },
    credentials:"include"

  })
  const data = await res.json();
  return data 
}
  
const Postdata = async () => {
  const data = await getData()
  const email = data.email


  const res = await fetch("/incrementc", {
    method: "POST",
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify({
      email , score
    })
  })
}

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

export default CSS