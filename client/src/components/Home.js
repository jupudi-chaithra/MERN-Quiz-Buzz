import React from 'react'
import './Home.css'
import homeImage from '../images/Home-image1.svg'

function Home() {
  return (
    <div>
        <h1>Welcome to Quiz Buzz</h1>
        <p>
          Test your knowledge on various topics by playing fun quizzes for free.
        </p>
        <p>
          Happy Quizzing!
        </p>
        <img src={homeImage} alt="Home" className='chatImage'/>
    </div>
  )
}

export default Home