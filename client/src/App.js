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

export const UserContext = createContext();


function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  
  return (    
    <div> 
      <UserContext.Provider value={{state, dispatch}}>
      <Navbar expand="md" className='nav'>
          <Navbar.Brand href="#" className='title text-white'><img src={logo} alt="Quiz" className='image-one'/> Quiz Buzz</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className='text-white components pe-4 ' href="/"><FontAwesomeIcon icon={faArrowRightToBracket} className="text-white"/> Login</Nav.Link>
              <Nav.Link className='text-white components pe-4 ' href="/home"><FontAwesomeIcon icon={faHome} className="text-white"/> Home</Nav.Link>
              <Nav.Link className='text-white components pe-4' href="/topics"><FontAwesomeIcon icon={faTasks} className="text-white"/> Topics</Nav.Link>
              <Nav.Link className='text-white components pe-4' href="/contactus"><FontAwesomeIcon icon={faContactBook} className="text-white" /> Contact Us</Nav.Link>
              <Nav.Link className='text-white components pe-4' href="/signup"><FontAwesomeIcon icon={faUserPlus} className="text-white" /> Sign Up</Nav.Link>
              <Nav.Link className='text-white components pe-4' href="/logout"><FontAwesomeIcon icon={faArrowLeft} className="text-white" /> Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>

      <Routes>
        <Route path="/" element = {<Login/>}></Route>
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
      </UserContext.Provider>
    </div>
    
  );
}

export default App;
