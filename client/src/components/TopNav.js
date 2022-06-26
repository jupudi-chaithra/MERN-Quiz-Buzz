import React, {useContext} from 'react'
import {Navbar, Nav} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faContactBook, faHome, faArrowRightToBracket, faTasks, faUserPlus, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/Logo.svg'
import {UserContext} from '../App'



function TopNav() {
    const {state, dispatch} = useContext(UserContext)

    const RenderMenu = () => {
      // console.log(state);
        if(state === true){
            return(
                <Navbar expand="md" className='nav'>
                <Navbar.Brand href="#" className='title text-white'><img src={logo} alt="Quiz" className='image-one'/> Quiz Buzz</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ms-auto">
                    <Nav.Link className='text-white components pe-4 ' href="/home"><FontAwesomeIcon icon={faHome} className="text-white"/> Home</Nav.Link>
                    <Nav.Link className='text-white components pe-4' href="/topics"><FontAwesomeIcon icon={faTasks} className="text-white"/> Topics</Nav.Link>
                    <Nav.Link className='text-white components pe-4' href="/contactus"><FontAwesomeIcon icon={faContactBook} className="text-white" /> Contact Us</Nav.Link>
                    <Nav.Link className='text-white components pe-4' href="/logout"><FontAwesomeIcon icon={faArrowLeft} className="text-white" /> Logout</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
            </Navbar>
            )
        }
        else{
            return(
                <Navbar expand="md" className='nav'>
                <Navbar.Brand href="#" className='title text-white'><img src={logo} alt="Quiz" className='image-one'/> Quiz Buzz</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ms-auto">
                    <Nav.Link className='text-white components pe-4 ' href="/login"><FontAwesomeIcon icon={faArrowRightToBracket} className="text-white"/> Login</Nav.Link>
                    {/* <Nav.Link className='text-white components pe-4 ' href="/home"><FontAwesomeIcon icon={faHome} className="text-white"/> Home</Nav.Link> */}
                    {/* <Nav.Link className='text-white components pe-4' href="/topics"><FontAwesomeIcon icon={faTasks} className="text-white"/> Topics</Nav.Link> */}
                    {/* <Nav.Link className='text-white components pe-4' href="/contactus"><FontAwesomeIcon icon={faContactBook} className="text-white" /> Contact Us</Nav.Link> */}
                    <Nav.Link className='text-white components pe-4' href="/signup"><FontAwesomeIcon icon={faUserPlus} className="text-white" /> Sign Up</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
            </Navbar>
            )
        }
    }

  return (
    <div>
       {/* <Navbar expand="md" className='nav'>
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
      </Navbar> */}
    <RenderMenu />

    </div>
  )
}

export default TopNav