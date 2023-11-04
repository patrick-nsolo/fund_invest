import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='navbar_text'>
            <div className='logo'>
                <img src='/Images/fund-invest.png' alt='logo'/>
            </div>  
            <ul className='navbar_ul'>
                    <li>
                        <a href=''>Cash</a>
                    </li>
                    <li>
                        <a href=''>Bonds</a>
                    </li>
                    <li>
                        <a href=''>Stocks</a>
                    </li>
                    <li>
                        <a href=''>Automated Investing</a>
                    </li>
                    <li>
                        <a href=''>Learn</a>
                    </li>
                </ul>  
            <div className='btns'>
                <button>Login</button>
                <button>Get Started</button>
            </div>
        </div>  
    </nav>
  )
}

export default Navbar
