import React, { useState } from 'react'

const Navbar = () => {
    const [showAutomatedInvesting, setShowAutomatedInvesting] = useState(false);
    const [showLearn, setShowLearn] = useState(false);

    const toggleAutomatedInvesting = () => {
        setShowAutomatedInvesting(!showAutomatedInvesting);
    };

    const toggleLearn = () => {
        setShowLearn(!showLearn);
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
                        <a href='/' 
                        onClick={toggleAutomatedInvesting}
                        className={showAutomatedInvesting ? 'active' : ''}
                        >
                        Automated Investing 
                        {showAutomatedInvesting ? ' ▲' : ' ▼'}
                        </a>
                        {showAutomatedInvesting && (
                        <ul className='dropdown-content'>
                            <li>
                            <a href='/automated-investing/option1' onClick={toggleAutomatedInvesting}>Option 1</a>
                            </li>
                            <li>
                            <a href='/automated-investing/option2' onClick={toggleAutomatedInvesting}>Option 2</a>
                            </li>
                        </ul>
                        )}
                    </li>
                    <li>
                        <a href='/'
                        onClick={toggleLearn}
                        className={showLearn ? 'active' : ''}
                        >
                        Learn
                        {showLearn ? ' ▲' : ' ▼'}
                        </a>
                        {showLearn && (
                        <ul className='dropdown-content'>
                            <li>
                            <a href='/learn/option1'>Option 1</a>
                            </li>
                            <li>
                            <a href='/learn/option2'>Option 2</a>
                            </li>
                        </ul>
                        )}
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
