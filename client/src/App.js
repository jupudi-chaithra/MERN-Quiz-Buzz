import {Route, Routes} from 'react-router-dom'
import ContactUs from './components/ContactUs';
import Home from './components/Home';
import Topics from './components/Topics';
import HTML from './components/HTML';
import CSS from './components/CSS';
import JS from './components/JS';
import Bootstrap from './components/Bootstrap';
import SignUp from './components/SignUp';
import Logout from './components/Logout';
import {Navbar, Nav} from 'react-bootstrap';
import Login from './components/Login.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faContactBook, faHome, faArrowRightToBracket, faTasks, faUserPlus, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import logo from './images/Logo.svg'
import { createContext, useReducer } from 'react';
import { initialState, reducer } from './reducer/UseReducer';
import TopNav from './components/TopNav'
import Intro from './components/Intro';

export const UserContext = createContext();

const Routing = () => {
    return(
        <Routes>
          <Route path="/" element = {<Intro/>}></Route>
          <Route path="/login" element = {<Login/>}></Route>
          <Route path="home" element = {<Home/>}></Route>
          <Route path="topics" element = {<Topics/>}>
            <Route path='html' element = {<HTML />}></Route>  
            <Route path='css' element = {<CSS />}></Route>  
            <Route path='js' element = {<JS />}></Route>
            <Route path='bootstrap' element = {<Bootstrap />}></Route>
          </Route>
          <Route path="contactus" element = {<ContactUs/>}></Route>
          <Route path="signup" element = {<SignUp/>}></Route>
          <Route path="logout" element = {<Logout/>}></Route>
        </Routes>
    )
  }

function App() {
  // const initialState = false
  const [state, dispatch] = useReducer(reducer, initialState)
 
  return (    
    <div> 
      <UserContext.Provider value={{state, dispatch}}>

        <TopNav/>
        <Routing/>
        
      </UserContext.Provider>
    </div>
    
  );
}

export default App;
