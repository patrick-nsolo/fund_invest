import React from 'react'
import './Navbar.css'
import Dropdown from '../Dropdown/Dropdown'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='navbar_content'>
            <div className='logo'>
                <img src='/Images/fund-invest.png' alt='logo'/>
            </div>  
              
            <div className='btns'>
                <button className='login'>Login</button>
                <button className='get_started'>Get Started</button>
            </div>
            
        </div>  
        
    </nav>
    
  )
}

export default Navbar
