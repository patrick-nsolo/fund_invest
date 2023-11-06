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

  const handleAutomatedInvestingOptionClick = () => {
    // Toggle the dropdown and refresh the page
    toggleAutomatedInvesting();
    window.location.reload();
  };

  const handleLearnOptionClick = () => {
    // Toggle the dropdown and refresh the page
    toggleLearn();
    window.location.reload();
  };

  return (
    <nav className='navbar'>
        <div className='navbar_content'>
            <div className='logo'>
                <img src='/Images/fund-invest.png' alt='logo'/>
            </div>  
            <ul className='navbar_ul'>
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
                <div className={`nav_link ${isAutomatedInvestingOpen ? 'caret-rotate' : ''}`} onClick={handleAutomatedInvestingClick}>
                  <span className={`selected ${isAutomatedInvestingOpen ? 'caret-rotate' : ''}`}>Automated Investing</span>
                  <div className={`caret ${isAutomatedInvestingOpen ? 'caret-rotate' : ''}`}></div>
                </div>
                <ul className={`dropdown ${isAutomatedInvestingOpen ? 'dropdown-open' : ''}`}>
                  <li onClick={handleAutomatedInvestingOptionClick}>Social Responsibility (SRI)</li>
                  <li onClick={handleAutomatedInvestingOptionClick}>Retirement (IRAs)</li>
                  <li onClick={handleAutomatedInvestingOptionClick}>Explore all Investments</li>
                </ul>
              </li>
              <li>
                <div className={`nav_link ${isLearnOpen ? 'caret-rotate' : ''}`} onClick={handleLearnClick}>
                  <span className={`selected ${isLearnOpen ? 'caret-rotate' : ''}`}>Learn</span>
                  <div className={`caret ${isLearnOpen ? 'caret-rotate' : ''}`}></div>
                </div>
                <ul className={`dropdown ${isLearnOpen ? 'dropdown-open' : ''}`}>
                  <li onClick={handleLearnOptionClick}>Education</li>
                  <li onClick={handleLearnOptionClick}>Guides</li>
                  <li onClick={handleLearnOptionClick}>FAQ</li>
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
