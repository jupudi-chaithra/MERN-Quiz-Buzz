import React from 'react'
import Person from '../images/Person.png'
import Person2 from '../images/Person2.png'
import Person3 from '../images/Person3.png'
import Person4 from '../images/Person4.png'
import './ContactUs.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEnvelope, faMailBulk, faPhone, faTasks } from '@fortawesome/free-solid-svg-icons'


function ContactUs() {
  return (
    <div className='text-center contacts'>
        {/* First row of cards */}
        <div className="row pt-4 mx-auto">
          <div className="col-md-3 col-12 col-sm-2"></div>

          {/* First card */}
          <div className="col-md-3 col-12 col-sm-4">
            <div className="card">
              <div className='card-head'>
                <img src={Person} className="photos" alt="Photo 1" />
              </div>
              <div className='card-body'>
                
                <h5 className='text-center name'>Anuradha Alampally</h5>
                <a className='phone' href="tel:7780279886"><FontAwesomeIcon className='icon' icon={faPhone} /> &nbsp;7780279886</a>
                <h6 className='text-center'><a className='email' href = "mailto: annuradhaalampally@gmail.com"><FontAwesomeIcon className='icon' icon={faEnvelope} /> &nbsp;annuradhaalampally@gmail.com</a></h6>
              </div>
            </div>
          </div>

          {/* Second card */}
          <div className="col-md-3 col-12 col-sm-4">
            <div className="card">
              <div className='card-head'>
                <img src={Person2} className="photos" alt="Photo 1" />
              </div>
              <div className='card-body'>
                <h5 className='text-center name'>Jupudi Chaithra</h5>
                <a className='phone' href="tel:8500092487"><FontAwesomeIcon className='icon' icon={faPhone} /> &nbsp;8500092487</a>
                <h6 className='text-center'><a className='email' href = "mailto: chaithra.jupudi@gmail.com"><FontAwesomeIcon className='icon' icon={faEnvelope} /> &nbsp;chaithra.jupudi@gmail.com</a></h6>
              </div>
            </div>
          </div>
        </div>

        {/* Second row of cards */}
        <div className="row pt-4 pb-4 mx-auto">
        <div className="col-md-3 col-12 col-sm-2"></div>
        {/* Third card */}
        <div className="col-md-3 col-12 col-sm-4">
          <div className="card">
            <div className='card-head'>
              <img src={Person3} className="photos" alt="Photo 1" />
            </div>
            <div className='card-body'>
              <h5 className='text-center name'>Nimmagadda Likhitha</h5>
              <a className='phone' href="tel:9701764702"><FontAwesomeIcon className='icon' icon={faPhone} /> &nbsp;9701764702</a>
              <h6 className='text-center'><a className='email' href = "mailto: nlikhitha2002@gmail.com"><FontAwesomeIcon className='icon' icon={faEnvelope} /> &nbsp;nlikhitha2002@gmail.com</a></h6>
            </div>
          </div>
        </div>

        {/* Fourth card */}
        <div className="col-md-3 col-12 col-sm-4">
          <div className="card">
            <div className='card-head'>
              <img src={Person4} className="photos" alt="Photo 1" />
            </div>
            <div className='card-body'>
              <h5 className='text-center name'>Rathod Giridhar</h5>
              <a className='phone' href="tel:9701764702"><FontAwesomeIcon className='icon' icon={faPhone} /> &nbsp;9701764702</a>
              <h6 className='text-center'><a className='email' href = "mailto: rathodsaigiridharprasad@gmail.com"><FontAwesomeIcon className='icon' icon={faEnvelope} /> &nbsp;rathodsaigiridharprasad@gmail.com</a></h6>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default ContactUs