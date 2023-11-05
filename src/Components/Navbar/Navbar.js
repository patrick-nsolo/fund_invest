import React from 'react'
import './Navbar.css'
import { Navlinks } from '../Navlinks'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='navbar_content'>
            <div className='logo'>
                <img src='/Images/fund-invest.png' alt='logo'/>
            </div>  
            <ul className='navbar_ul'>
              <li>
                <a href='/'>Cash</a>
              </li>
              <li>
                <a href='/'>Bonds</a>
              </li>
              <li>
                <a href='/'>Stocks</a>
              </li>
              <li>
                <a href='/automated-investing'>Automated Investing </a>
              </li>
              <li>
                <a href='/learn'>Learn</a>
              </li>
            </ul> 
            <div className='btns'>
                <button className='login'>Login</button>
                <button className='get_started'>Get Started</button>
            </div>    
        </div>    
    </nav>  
  )
}

export default Navbar
