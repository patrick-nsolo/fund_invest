import React from 'react';
import './Risktolerance.css'

const Risktolerance = () => {
    
  return (
    <div className='rt'>
        <div className='exchange-rates'>
            <div className='exchange-rates-text'>
                <h2>Latest Currencies</h2>
                <h3>We offer CBN rates</h3>
            </div>
            <hr/>
            <div className='rates'>
                <ul>
                    <li>
                        <span className='currency'>USD</span> 
                        <span>783.174</span>
                    </li>
                    <li>
                        <span className='currency'>GBP</span> 
                        <span>965.8102</span>
                    </li>
                    <li>
                        <span className='currency'>EUR</span> 
                        <span>838.3221</span>
                    </li>
                </ul>
            </div>
            <div className='rates'>
                <ul>
                    <li><span className='currency'>CHF</span> 870</li>
                    <li className='yen'><span className='currency'>YEN</span> 5.2351</li>
                </ul>
            </div>
        </div>
        <div className='risk-tolerance'>
            <h2>Risk Tolerance</h2>
            <h3>Choose your risk tolerance level</h3>
            <div className='risk-tolerance-btn'>
                <button className='login'>Low</button>
                <button className='login'>Medium</button>
                <button className='login'>High</button>    
            </div>
        </div>
    </div>
  )
}

export default Risktolerance;
