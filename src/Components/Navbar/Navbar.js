import React, { useState } from 'react';
import './Navbar.css';


const Navbar = () => {
  const [isAutomatedInvestingOpen, setAutomatedInvestingOpen] = useState(false);
  const [isLearnOpen, setLearnOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to toggle the AutomatedInvesting dropdown
  const toggleAutomatedInvesting = () => {
    setAutomatedInvestingOpen(!isAutomatedInvestingOpen);
  };

  // Add this function to the learn dropdown
  const toggleLearn = () => {
    setLearnOpen(!isLearnOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenus = () => {
    setAutomatedInvestingOpen(false);
    setLearnOpen(false);
  };

  return (
    <nav className={`navbar ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <div className='navbar_content'>
            <div className='logo'>
                <img src='/Images/fund-invest.png' alt='logo'/>
            </div> 
            <div className='mobile-menu-icon hamburger' onClick={toggleMobileMenu}>
              <div className={`bar ${isMobileMenuOpen ? 'change' : ''}`}></div>
              <div className={`bar ${isMobileMenuOpen ? 'change' : ''}`}></div>
              <div className={`bar ${isMobileMenuOpen ? 'change' : ''}`}></div>
            </div> 
            <ul className={`navbar_ul ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
              <li className='nav_link'>
                <a href='/'>Cash</a>
              </li>
              <li className='nav_link'>
                <a href='/'>Bonds</a>
              </li>
              <li className='nav_link'>
                <a href='/'>Stocks</a>
              </li>
              <li>
                <div className={`nav_link ${isAutomatedInvestingOpen ? 'caret-rotate' : ''}`} onClick={toggleAutomatedInvesting}>
                  <span className={`selected ${isAutomatedInvestingOpen ? 'caret-rotate' : ''}`}>Automated Investing</span>
                  <div className={`caret ${isAutomatedInvestingOpen ? 'caret-rotate' : ''}`}></div>
                </div>
                <ul className={`dropdown ${isAutomatedInvestingOpen ? 'dropdown-open' : ''}`}>
                  <li onClick={closeMenus}>Social Responsibility (SRI)</li>
                  <li onClick={closeMenus}>Retirement (IRAs)</li>
                  <li onClick={closeMenus}>Explore all Investments</li>
                </ul>
              </li>
              <li>
                <div className={`nav_link ${isLearnOpen ? 'caret-rotate' : ''}`} onClick={toggleLearn}>
                  <span className={`selected ${isLearnOpen ? 'caret-rotate' : ''}`}>Learn</span>
                  <div className={`caret ${isLearnOpen ? 'caret-rotate' : ''}`}></div>
                </div>
                <ul className={`dropdown ${isLearnOpen ? 'dropdown-open' : ''}`}>
                  <li onClick={closeMenus}>Education</li>
                  <li onClick={closeMenus}>Guides</li>
                  <li onClick={closeMenus}>FAQ</li>
                </ul>
              </li>
            </ul> 
            <div className='btns'>
              <button className='login bttn'>Login</button>
              <button className='get_started bttn'>Get Started</button>
            </div>    
        </div>    
    </nav>  
  )
}

export default Navbar
