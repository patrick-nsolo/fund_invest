import React from 'react';
import './Risktolerance.css'

const riskTolerance = () => {
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
                    <li><span>USD</span> 783.174</li>
                    <li><span>GBP</span> 965.8102</li>
                    <li><span>EUR</span> 838.3221</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li><span>CHF</span> 870</li>
                    <li><span>YEN</span> 5.2351</li>
                </ul>
            </div>
        </div>
        <div className='currency-converter'>
            <h2>Convert currency</h2>
            <h3>Quickly convert any major currency to NGN</h3>
            <div>
                <form >
                <div>
                <label>Currency:</label>
                <select >
                    <option value="dollars">Dollars</option>
                    <option value="pounds">Pounds</option>
                    <option value="yen">Yen</option>
                </select>
                <input
                    type="number"
                    //value={amount}
                    //onChange={handleAmountChange}
                    placeholder="Enter amount"
                />
                </div>
                <button type="submit">Convert</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default riskTolerance;
