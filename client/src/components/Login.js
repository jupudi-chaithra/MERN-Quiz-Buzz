import React, {useState, useContext} from 'react'
import {useForm} from 'react-hook-form'
import './Login.css'
import '../App.css'
import { useNavigate } from 'react-router-dom'
import loginImage from '../images/Login-image.svg'
import {UserContext} from '../App'

function Login() {
// let {handleSubmit, formState: { errors } } = useForm()
// let usernames = ["anuradha", "chaithra", "likhitha", "giridhar"]
// let passwords = [1234, 5678, 9101112, 13141516]

  const {state, dispatch} = useContext(UserContext)
  let navigate = useNavigate()

//   function onFormSubmit(){
//     let x = document.forms["loginForm"]["un"].value;
//     let y = document.forms["loginForm"]["pw"].value;
//     let unIsPresent = usernames.findIndex(element => element === x)
//     if(unIsPresent !== -1)
//     {
//       if(passwords[unIsPresent] == y)
//       {
//         navigate("/home")
//       }
//       else
//       {
//         alert("Invalid password")
//       }
//     }
//     else
//     {
//       alert("invalid username")
//     }

//   }
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const loginUser = async (e) => {
    e.preventDefault()

    const res = await fetch('/signin', {
      method:"POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        email, password
      })
    })

    const data = res.json()

    if(res.status === 400 || !data){
      window.alert("Invalid credentials")
    }
    else{
      dispatch({type:"USER", payload: true})
      // window.alert("Login successful")
      navigate("/home")
      // navigate("/topics")
    }
  }



  return (
    <div className='login-page'>
      <h4 className='text-center display-6 pb-4'>Login to continue <img className='loginImage' src={loginImage} alt="login" /> </h4>
      <form method="POST" name='loginForm' className="mx-auto p-4 loginForm">
        <div className="mb-3">
          <label htmlFor="email">Email</label>
          <input type="email" id='email' name="email" className="form-control" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {/* <button className='login-button'>Login</button> */}
        <div>
          <input className="login-button" type="submit" name='login' value='Login' onClick={loginUser}/>
        </div>
      </form>
    </div>
  )
}

export default Login