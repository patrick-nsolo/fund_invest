import React, { useState, useEffect } from 'react'
import './Phonesection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'


const Phonesection = () => {
  const [balance, setBalance] = useState(0);
  useEffect(() => {
    const updateBalance = (targetValue, duration) => {
      const startTime = Date.now();
      const animationDuration = duration;

      const update = () => {
        const currentTime = Date.now();
        const elapsedTime = currentTime - startTime;

        if (elapsedTime < animationDuration) {
          const newValue = (targetValue * (elapsedTime / animationDuration));
          setBalance(newValue);
          requestAnimationFrame(update);
        } else {
          setBalance(targetValue);
        }
      };
      requestAnimationFrame(update);
    };
    const targetBalance = 67593.0;
    const animationDuration = 2000;
    
    // Call the updateBalance function with the target balance and duration
    updateBalance(targetBalance, animationDuration);
  }, []);
  return (
    <div className='phone-section'>
      <div className='phone-section-container'>
        <div className='row'>
          <div className='col-6 about'>
            <h3>About Us</h3>
            <h1>WELCOME TO FUND INVEST</h1>
            <p>
              There’s no secret to long-term wealth, but if there were it would be 
              <span> automated index investing.</span>
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
              <h3 className='balance'>${balance.toFixed(2)}</h3>
              <div className='indicators'>
                <li><span className='caret'></span>1.7% today</li>
                <li><span className='caret'></span>35.4% all time</li>
                <li>$579 estimated taxes saved</li>
              </div>
            </div>
          </div>
        </div>
        <div className='line-chart'>
          <img src='../images/linechart.gif' alt=''/>
          <div className='transfer-money'>Transfer Money</div>
        </div>
        
      </div>  
    </div>
  )
}

export default Phonesection
