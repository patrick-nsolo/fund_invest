import React from 'react'
import './Phonesection.css'


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
          </div>
          <div className='phone-interface'>
            <div className='top-nav'>
              <></>

            </div>

          </div>
        </div>
      </div>  
    </div>
  )
}

export default Phonesection
