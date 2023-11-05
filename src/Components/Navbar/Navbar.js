import React, { useState } from 'react'
import './Navbar.css'


const Navbar = () => {
  const [isAutomatedInvestingOpen, setAutomatedInvestingOpen] = useState(false);
  const [isLearnOpen, setLearnOpen] = useState(false);
  // Function to toggle the AutomatedInvesting dropdown
  const toggleAutomatedInvesting = () => {
    setAutomatedInvestingOpen(!isAutomatedInvestingOpen);
  };

  // Add this function to the learn dropdown
  const toggleLearn = () => {
    setLearnOpen(!isLearnOpen);
  };
  
  const handleAutomatedInvestingClick = () => {
    toggleAutomatedInvesting();
    // Close the Learn dropdown if it's open
    if (isLearnOpen) {
      setLearnOpen(false);
    }
  };

  const handleLearnClick = () => {
    toggleLearn();
    // Close the Automated Investing dropdown if it's open
    if (isAutomatedInvestingOpen) {
      setAutomatedInvestingOpen(false);
    }
  };
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
                <div className={`nav_link ${isAutomatedInvestingOpen ? 'caret-rotate' : ''}`} onClick={handleAutomatedInvestingClick}>
                  <span className={`selected ${isAutomatedInvestingOpen ? 'caret-rotate' : ''}`}>Automated Investing</span>
                  <div className={`caret ${isAutomatedInvestingOpen ? 'caret-rotate' : ''}`}></div>
                </div>
                <ul className={`dropdown ${isAutomatedInvestingOpen ? 'dropdown-open' : ''}`}>
                  <li>Social Responsibility (SRI)</li>
                  <li>Retirement (IRAs)</li>
                  <li>Explore all Investments</li>
                </ul>
              </li>
              <li>
                <div className={`nav_link ${isDropdownOpen ? 'caret-rotate' : ''}`} onClick={handleLearnClick}>
                    <span className={`selected ${isDropdownOpen ? 'caret-rotate' : ''}`}>Learn</span>
                    <div className={`caret ${isDropdownOpen ? 'caret-rotate' : ''}`}></div>
                  </div>
                  <ul className={`dropdown ${isDropdownOpen ? 'dropdown-open' : ''}`}>
                      <li>Social Responsibility (SRI)</li>
                      <li>Retirement (IRAs)</li>
                      <li>Explore all Investments</li>
                  </ul>
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
