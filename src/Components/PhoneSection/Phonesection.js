import React from 'react'
import './Phonesection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


const Phonesection = () => {
  return (
    <div className='phone-section'>
      <div className='phone-section-container'>
        <div className='row'>
          <div className='col-6'>
            <h3>About Us</h3>
              <h1>WELCOME TO FUND INVEST</h1>
              <p>There’s no secret to long-term wealth, but if there were it would be this:
              <span>automated index investing.</span>
              </p>
              <p>
              Even with the inevitable ups and downs of the market, our expert-built, 
              globally-diversified Automated Investing Account makes it easy to start 
              building long-term wealth by managing your risk, maximizing returns, 
              and minimizing taxes.
              </p>
          </div>
          <div className='col-6 phony'>
            <div className='phone-black-outline'></div>
            <div className='phone-white-outline'></div>
            <div className='top-nav'>
              <FontAwesomeIcon icon={faArrowLeft} />
              <p>Classic Portfolio</p>
              <p>Manage</p>
            </div>
            <div className='profile-pic'>
              <img src='../images/profile-pic.webp' alt=''/>
              <h3 className='balance'>$67,953.00</h3>
              <div className='indicators'>
                <li><span className='caret'></span>1.7% today</li>
                <li><span className='caret'></span>35.4% all time</li>
                <li>$579 estimated taxes saved</li>
              </div>
            </div>
            
          </div>

        </div>
      </div>  
    </div>
  )
}

export default Phonesection
