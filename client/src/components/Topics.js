import React, { useEffect, useContext } from 'react'
import {Link, Outlet, useNavigate} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './topics.css'
import TopicsImage from '../images/Topics-image.svg'
import TopicsImage2 from '../images/Topics-image2.svg'
import { faBootstrap, faCss3, faHtml5, faJs } from '@fortawesome/free-brands-svg-icons'
import {useState} from 'react'
import {UserContext} from '../App'


function Topics() {
  const {state, dispatch} = useContext(UserContext)

  let navigate = useNavigate()

  const callTopicsPage = async () => {
    try{
      const res = await fetch('/topics', {
        // method: "GET",
        headers: {
          Accept : "application/json",
          "Content-Type" : "application/json"
        },
        credentials:"include"

      })

      const data = await res.json();
      // console.log(data);

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
    callTopicsPage();
    dispatch({type:"USER", payload: true})
  }, [])
  

  const [style, setStyle] = useState("parent");
  const changeStyle = () => {
    console.log("you just clicked");
  
    setStyle("topics-parent2");
  };

  
  return (
    <div>
      <div>
      <img className="image-three" src={TopicsImage2} alt="Quiz"/>
      <div className='parent'>
        <div className={style}>
        <h3 className='heading3 '>Choose a topic</h3>
          <Link className="nav-link topics" to = "html" onClick={changeStyle}><FontAwesomeIcon icon={faHtml5}/> HTML</Link>
          <Link className="nav-link topics" to = "css" onClick={changeStyle}><FontAwesomeIcon icon={faCss3}/> CSS</Link>
          <Link className="nav-link topics" to = "bootstrap" onClick={changeStyle}><FontAwesomeIcon icon={faBootstrap}/> Bootstrap</Link>
          <Link className="nav-link topics" to = "js" onClick={changeStyle}><FontAwesomeIcon icon={faJs}/> JavaScript</Link>
        </div>
        <Outlet/>
      </div>
      <img className="image-two" src={TopicsImage} alt="Quiz"/>
      </div>
    </div>
  )
}

export default Topics
