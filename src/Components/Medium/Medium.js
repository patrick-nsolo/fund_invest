import React from 'react'

const Medium = () => {
  return (
    <div>
        <div className='intro'>
            <h1>Hello User,</h1> 
            <h2>You have selected a low Risk tolerance level</h2>
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
                <a href='/' className='smart-btn'>Get Started</a>
            </div>
        </div>  
    </div>
  )
}

export default Medium
