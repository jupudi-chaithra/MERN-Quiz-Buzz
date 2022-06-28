import React, { useEffect, useContext, useState } from 'react'
import './Home.css'
import {useNavigate} from 'react-router-dom'
import {UserContext} from '../App'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faRankingStar, faPenToSquare, faCircleInfo} from '@fortawesome/free-solid-svg-icons';
import { faBootstrap, faCss3, faHtml5, faJs } from '@fortawesome/free-brands-svg-icons'
import homeImage from '../images/Home-image1.svg'


function Home() {
  const {state, dispatch} = useContext(UserContext)
  const [userData, setUserData] = useState({})

  let navigate = useNavigate()
  

  const callHomePage = async () => {
    try{
        const res = await fetch('/home', {
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

  const totalQ = userData.html + userData.css + userData.js + userData.bs
  const totalS = (userData.htmlScore + userData.cssScore + userData.jsScore + userData.bsScore) / 4

  return (
    <div>
        <h1 >Welcome, {userData.name}! </h1>
        <table className='total'>
          <tr>
            <th><h2>Topic</h2></th>
            <th><h2 className='centre'>Number of Times Attempted</h2></th>
            <th><h2 className='centre'>Average Score</h2></th>
          </tr>
          <tr>
            <td><h5><FontAwesomeIcon icon={faHtml5}/> HTML</h5></td>
            <td><h5 className='centre'>{userData.html}</h5></td>
            <td><h5 className='centre'>{userData.htmlScore}</h5></td>
          </tr>
          <tr>
            <td><h5 ><FontAwesomeIcon icon={faCss3}/> CSS</h5></td>
            <td><h5 className='centre'>{userData.css}</h5></td>
            <td><h5 className='centre'>{userData.cssScore}</h5></td>
          </tr>
          <tr>
            <td><h5><FontAwesomeIcon icon={faBootstrap}/> BootStrap</h5></td>
            <td><h5 className='centre'>{userData.bs}</h5></td>
            <td><h5 className='centre'>{userData.bsScore}</h5></td>
          </tr>
          <tr>
            <td><h5><FontAwesomeIcon icon={faJs}/> JavaScript</h5></td>
            <td><h5 className='centre'>{userData.js}</h5></td>
            <td><h5 className='centre'>{userData.jsScore}</h5></td>
          </tr>
        </table>
    </div>
  )
}

export default Home