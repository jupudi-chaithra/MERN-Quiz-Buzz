import React, {useState} from 'react'
import './SignUp.css'
import { useNavigate } from 'react-router-dom'


function SignUp() {
  const navigate = useNavigate()

  const [user, setUser] = useState({
    name: "", email: "", password: "", cpassword: ""
  })

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name
    value = e.target.value

    setUser({...user, [name]:value})
  }
  
  const PostData = async (e) => {
    e.preventDefault()
    const {name, email, password, cpassword} = user

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        name, email, password, cpassword
      })
    })

    const data = await res.json();

    if(res.status === 422){
      window.alert("Email ID is already registered")
      console.log("Registration failed")
    }
    else if(res.status === 421){
      window.alert("Username is already registered")
      console.log("Registration failed")
    }
    else if(res.status === 424){
      window.alert("Enter all the fields")
      console.log("Registration failed")
    }
    else if(res.status === 423){
      window.alert("Confirm password is not same as password")
      console.log("Registration failed")
    }
    else if(!data){
      window.alert("Registration failed")
      console.log("Registration failed")
    }
    else{
      window.alert("Registration successful")
      console.log("Registration successful")
      navigate('/')
    }

    

  }

  return (
    <div className='signin-page'>
    <h4 className='text-center display-6 pb-4'>Sign Up</h4>
      <form method="POST" name='SignUpForm' className="mx-auto p-4 SignUpForm">
        <div className="mb-3">
          <label htmlFor="name">Name</label>
          <input type="text" id='name' name="name" className="form-control" 
            value = {user.name}
            onChange = {handleInputs}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" className="form-control"
            value = {user.email}
            onChange = {handleInputs}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" className="form-control"
            value = {user.password}
            onChange = {handleInputs}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword">Confirm Password</label>
          <input type="password" id="cpassword" name="cpassword" className="form-control"
            value = {user.cpassword}
            onChange = {handleInputs}
          />
        </div>
        {/* <button className='login-button'>Sign Up</button> */}
        <div>
            <input className="login-button" type="submit" value="Register" name='signup' onClick={PostData}/>
        </div>
      </form>
    </div>
  )
}

export default SignUp