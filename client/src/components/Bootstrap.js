import {React, useState} from 'react'
import './game.css'

function Bootstrap() {
  const questions = [
    {
      questionText: "Which of the following is correct about Bootstrap?",
      answerOptions: [
          {answerText: "Bootstrap's responsive CSS adjusts to Desktops,Tablets and Mobiles.", isCorrect: false},
          {answerText: "Provides a clean and uniform solution for building an interface for developers.", isCorrect: false},
          {answerText: "It contains beautiful and functional built-in components which are easy to customize.", isCorrect: false},
          {answerText: "All of the above", isCorrect: true},
      ],
    },
    {
      questionText: "Which of the following class can be used to create a responsive table?",
      answerOptions: [
          {answerText: ".table-responsive", isCorrect: true},
          {answerText: ".responsive", isCorrect: false},
          {answerText: ".active", isCorrect: false},
          {answerText: ".table", isCorrect: false},
      ],
    },
    {
      questionText: "Which of the following is true about bootstrap help text?",
      answerOptions: [
        {answerText: "Bootstrap form controls can have a block level help text that flows with the inputs.", isCorrect: false},
        {answerText: "To add a full width block of content, use the .help-block after the <input>.", isCorrect: false},
        {answerText: "Both of the above.", isCorrect: true},
        {answerText: "None of the above.", isCorrect: false},
      ],
    },
    {
      questionText: "Which of the following bootstrap style of image makes the entire image round by adding border-radius:500px?",
      answerOptions: [
        {answerText: ".img-rounded", isCorrect: false},
        {answerText: ".img-circle", isCorrect: true},
        {answerText: ".img-thumbnail", isCorrect: false},
        {answerText: "None of the above", isCorrect: false},
      ],
    },
    {
      questionText: "Which of the following bootstrap styles are used to add a dropdown to a pills?",
      answerOptions: [
        {answerText: ".nav, .nav-tab, .menu", isCorrect: false},
        {answerText: " .nav, .nav-pills, .dropdown-.menu", isCorrect: true},
        {answerText: ".nav, .nav-pills, .dropdown", isCorrect: false},
        {answerText: " .nav, .nav-pills", isCorrect: false},
      ],
    },
    {
      questionText: "Which of the following bootstrap style is used to create a .pagination?",
      answerOptions: [
        {answerText: ".breadcrumb", isCorrect: false},
        {answerText: ".pagination", isCorrect: true},
        {answerText: ".menu", isCorrect: false},
        {answerText: "None of the above", isCorrect: false},
      ],
    },
    {
      questionText: " Which of the following bootstrap styles can be used to create a Stacked progress bar?",
      answerOptions: [
        {answerText: ".progress-stacked", isCorrect: false},
        {answerText: ".progress", isCorrect: true},
        {answerText: ".progress-stack.", isCorrect: false},
        {answerText: "None of the above.", isCorrect: false},
      ],
    },
    {
      questionText: "Which of the following class can be used to add a footer to a panel?",
      answerOptions: [
        {answerText: ".panel-footer", isCorrect: true},
        {answerText: ".footer", isCorrect: false },
        {answerText: ".panel", isCorrect: false},
        {answerText: "None of the above", isCorrect: false},
      ],
    },
    {
      questionText: "Which of the following is correct about Tab Plugin?",
      answerOptions: [
        {answerText: "You can toggle the Tab plugin's hidden content via data attributes.", isCorrect: false},
        {answerText: "You can toggle the Tab plugin's hidden content via javascript.", isCorrect: false},
        {answerText: "Both of the above", isCorrect: true},
        {answerText: "None of the above", isCorrect: false},
      ],
    },
    {
      questionText: "Which of the following is correct about data-trigger Data attribute of popover Plugin?",
      answerOptions: [
        {answerText: "Sets the default title value if the title attribute isn't present.", isCorrect: false},
        {answerText: "Defines how the popover is triggered.", isCorrect: true},
        {answerText: "Defines default content value if data-content attribute isn't present", isCorrect: false},
        {answerText: "Delays showing and hiding the popover in ms.", isCorrect: false},
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

export default Bootstrap