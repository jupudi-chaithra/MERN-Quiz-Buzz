import {React, useState} from 'react'
import './game.css'

function JS() {
  const questions = [
    {
      //1
      questionText: "Inside which HTML element do we put the JavaScript?",
      answerOptions: [
          {answerText: "<script>", isCorrect: true},
          {answerText: "<javascript>", isCorrect: false},
          {answerText: "<js>", isCorrect: false},
          {answerText: "<scripting>", isCorrect: false},
      ],
    },
    //2
    {
      questionText: "What is the correct syntax for referring to an external script called 'xxx.js'?",
      answerOptions: [
          {answerText: "<script href='xxx.js'>", isCorrect: false},
          {answerText: "<script name='xxx.js'>", isCorrect: false},
          {answerText: "<script src='xxx.js'>", isCorrect: true},
          {answerText: "<script file='xxx.js'>", isCorrect: false},
      ],
    },
    //3
    {
      questionText: "How do you write 'Hello World' in an alert box?",
      answerOptions: [
        {answerText: "msgBox('Hello World');", isCorrect: false},
        {answerText: "alertBox('Hello World');", isCorrect: false},
        {answerText: "msg('Hello World');", isCorrect: false},
        {answerText: "alert('Hello World');", isCorrect: true},
      ],
    },
    //4
    {
      questionText: "Which of the following is true about variable naming conventions in JavaScript?",
      answerOptions: [
        {answerText: "You should not use any of the JavaScript reserved keyword as variable name.", isCorrect: false},
        {answerText: "JavaScript variable names should not start with a numeral (0-9).", isCorrect: false},
        {answerText: "Both of the above", isCorrect: true},
        {answerText: "None of the above", isCorrect: false},
      ],
    },
    //5
    {
      questionText: "Which of the following is a server-side Java Script object?",
      answerOptions: [
        {answerText: "Function", isCorrect: false},
        {answerText: "File", isCorrect: true},
        {answerText: "FileUpload", isCorrect: false},
        {answerText: "Date", isCorrect: false},
      ],
    },
    //6
    {
      questionText: "Which of the below is used in Java script to insert special characters?",
      answerOptions: [
        {answerText: "*", isCorrect: false},
        {answerText: "\\", isCorrect: true},
        {answerText: "-", isCorrect: false},
        {answerText: "%", isCorrect: false},
      ],
    },
    //7
    {
      questionText: "How does Java Script store dates in objects of Date type?",
      answerOptions: [
        {answerText: "The number of days since January 1st, 1900", isCorrect: false},
        {answerText: "The number of seconds since January 1st, 1970", isCorrect: false},
        {answerText: "The number of milliseconds since January 1st, 1970", isCorrect: true},
        {answerText: "The number of picoseconds since January 1st, 1970", isCorrect: false},
      ],
    },
    //8
    {
      questionText: "Which is the correct way to write a JavaScript array",
      answerOptions: [
        {answerText: "var txt = new Array(1:\"arr\",2:\"kim\",3:\"jim\")", isCorrect: false},
        {answerText: "var txt = new Array:1=(\" arr \")2=(\"kim\")3=(\"jim\")", isCorrect: false},
        {answerText: "var txt = new Array(\"arr \",\"kim\",\"jim\") ", isCorrect: true},
        {answerText: "var txt = new Array=\" arr \",\"kim\",\"jim\"", isCorrect: false},
      ],
    },
    //9
    {
      questionText: "Which of the following is the tainted property of a window object in Java Script?",
      answerOptions: [
        {answerText: "Pathname", isCorrect: false},
        {answerText: "Protocol", isCorrect: false },
        {answerText: "Defaultstatus", isCorrect: true},
        {answerText: "Host", isCorrect: false},
      ],
    },
    //10
    {
      questionText: "Which attribute needs to be changed to make elements invisible?",
      answerOptions: [
        {answerText: "visibility", isCorrect: true},
        {answerText: "visible", isCorrect: false},
        {answerText: "invisible", isCorrect: false},
        {answerText: "invisibilty", isCorrect: false},
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


  const res = await fetch("/incrementj", {
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

export default JS