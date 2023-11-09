import React from 'react'
import './Low.css'

const Low = () => {
  return (
    <div className='low-container'>
        <div className='intro'>
            <h1>Hello Investor,</h1> 
            <h2>You have selected a Low Risk tolerance level</h2>
        </div>
        <div className='low-portfolio'>
            <p>
                Choose from hundreds of funds in categories like clean energy, 
                tech, and crypto and we’ll handle the trades and rebalance your 
                portfolio for you. Or start with a portfolio designed around your 
                values with our Socially Responsible portfolio. We make it easy and 
                safe to customize by helping you see when your choices won’t be in 
                line with your preferred risk level.
            </p>
            <div className='banner_btn'>
                <button className='low-btn'>Get Started</button>
            </div>
        </div>   
    </div>
  )
}

export default Low
