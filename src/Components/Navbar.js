import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='navbar_text'>
            <div className='logo'>
                <img src='/Images/fund-invest.png' alt='logo'/>
                <ul>
                    <li>
                        <a href=''>Cash</a>
                    </li>
                    <li>
                        <a href=''>Bonds</a>
                    </li>
                    <li>
                        <a href=''>Stocks</a>
                    </li>
                </ul>
            </div>

        </div>
      
    </nav>
  )
}

export default Navbar
