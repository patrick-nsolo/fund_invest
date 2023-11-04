import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Header.css'

const Header = () => {
  return (
    <div className='banner'>
        <Navbar/>
        <div className='banner_content'>
            <div className='container'>
                <div className='banner_text'>
                    <h3>Efficient and Automated</h3>
                    <h1>FUND INVEST</h1>
                    <p>
                        Unlock Financial Prosperity: Empower Your Future with Fund Invest.
                        We help you cultivate wealth with precision. Financial Success Begins
                        Here.
                    </p>
                    <div className='banner_btn'>
                        <a href='/' className='smart-btn'>Get Started</a>
                    </div>
                </div>
            </div>
        </div> 
      
    </div>
  )
}

export default Header
