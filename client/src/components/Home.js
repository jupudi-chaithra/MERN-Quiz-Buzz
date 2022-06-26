import React, { useEffect, useContext, useState } from 'react'
import './Home.css'
import {useNavigate} from 'react-router-dom'
import {UserContext} from '../App'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import homeImage from '../images/Home-image1.svg'




function Home() {
  const {state, dispatch} = useContext(UserContext)
  const [userData, setUserData] = useState({})

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
      // console.log(data);
      setUserData(data)


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
    dispatch({type:"USER", payload: true})
  }, [])


  return (
    <div>
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
    </div>
  )
}

export default Home