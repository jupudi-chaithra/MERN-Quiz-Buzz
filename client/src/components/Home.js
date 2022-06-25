import React, { useEffect } from 'react'
import './Home.css'
import homeImage from '../images/Home-image1.svg'
import {useNavigate} from 'react-router-dom'

function Home() {

  let navigate = useNavigate()

  const callHomePage = async () => {
    try{
      const res = await fetch('/home', {
        // method: "GET",
        headers: {
          Accept : "application/json",
          "Content-Type" : "application/json"
        },
        credentials:"include"

      })

      const data = await res.json();
      console.log(data);

      if(!res.status === 200){
        const error = new Error(res.error)
        throw error;
      }

    }catch(err){
      console.log(err);
      navigate("/")

    }
  }

  useEffect(() => {
    callHomePage();
  }, [])


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